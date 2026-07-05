import { z } from "zod";
import { log } from "../logger.js";
import {
  PANAYA_OPERATIONS,
  type PanayaOperation
} from "../generated/panayaOperations.js";

const inputSchema = {
  action: z.enum(["list", "get", "create", "update", "delete", "search", "operation"])
    .describe("Operation to perform against the Panaya entity."),
  id: z.string().optional()
    .describe("Entity identifier. Required for get, update, and delete."),
  operationId: z.string().optional()
    .describe("Swagger operationId. Required when action is operation."),
  projectId: z.string().optional()
    .describe("Optional project filter for list operations."),
  pathParams: z.record(z.string(), z.unknown()).optional()
    .describe("Path parameters for Swagger operation calls."),
  queryParams: z.record(z.string(), z.unknown()).optional()
    .describe("Query string parameters for Swagger operation calls."),
  data: z.record(z.string(), z.unknown()).optional()
    .describe("Request body for create and update operations."),
  query: z.record(z.string(), z.unknown()).optional()
    .describe("Search payload for search operations.")
};

const operationsInputSchema = {
  action: z.enum(["list", "describe", "call"])
    .describe("Use list to discover operations, describe for one operation, or call to execute it."),
  operationId: z.string().optional()
    .describe("Swagger operationId for describe and call."),
  tag: z.string().optional()
    .describe("Filter list results by Swagger tag."),
  search: z.string().optional()
    .describe("Filter list results by text in operationId, path, summary, or tag."),
  limit: z.number().int().positive().max(100).optional()
    .describe("Maximum operations to return for list. Defaults to 50."),
  pathParams: z.record(z.string(), z.unknown()).optional()
    .describe("Path parameters for call."),
  queryParams: z.record(z.string(), z.unknown()).optional()
    .describe("Query string parameters for call."),
  data: z.record(z.string(), z.unknown()).optional()
    .describe("Request body for call.")
};

export class ToolGenerator {

  constructor(private server: any, private client: any) {}

  private operationsById = new Map(
    PANAYA_OPERATIONS.map((operation) => [operation.operationId, operation])
  );

  private result(data: any) {
    const structuredContent = this.structuredContent(data);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data, null, 2)
        }
      ],
      structuredContent
    };
  }

  private structuredContent(data: any) {
    if (Array.isArray(data)) {
      return { data };
    }

    if (data !== null && typeof data === "object") {
      return data;
    }

    return { data };
  }

  private requireString(value: unknown, name: string) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error(`${name} is required`);
    }

    return value;
  }

  private requireObject(value: unknown, name: string) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      throw new Error(`${name} is required`);
    }

    return value;
  }

  private listPath(base: string, projectId?: string) {
    if (!projectId) {
      return base;
    }

    const params = new URLSearchParams({ projectId });
    return `${base}?${params.toString()}`;
  }

  private operationSummary(operation: PanayaOperation) {
    return {
      operationId: operation.operationId,
      method: operation.method,
      path: operation.path,
      summary: operation.summary,
      tags: operation.tags,
      pathParams: operation.pathParams,
      queryParams: operation.queryParams,
      hasBody: operation.hasBody
    };
  }

  private resolveOperation(operationId: unknown) {
    const id = this.requireString(operationId, "operationId");
    const operation = this.operationsById.get(id);

    if (!operation) {
      throw new Error(`Unknown operationId: ${id}`);
    }

    return operation;
  }

  private buildOperationPath(
    operation: PanayaOperation,
    pathParams: Record<string, unknown> = {},
    queryParams: Record<string, unknown> = {}
  ) {
    let path = operation.path;

    for (const param of operation.pathParams) {
      const rawValue = pathParams[param.name];

      if (rawValue === undefined || rawValue === null || rawValue === "") {
        if (param.required) {
          throw new Error(`${param.name} is required`);
        }

        continue;
      }

      path = path.replace(
        `{${param.name}}`,
        encodeURIComponent(String(rawValue))
      );
    }

    for (const param of operation.queryParams) {
      const rawValue = queryParams[param.name];

      if ((rawValue === undefined || rawValue === null || rawValue === "") && param.required) {
        throw new Error(`${param.name} is required`);
      }
    }

    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(queryParams)) {
      if (value === undefined || value === null) {
        continue;
      }

      if (Array.isArray(value)) {
        for (const item of value) {
          params.append(key, String(item));
        }
      } else {
        params.set(key, String(value));
      }
    }

    const queryString = params.toString();
    return queryString ? `${path}?${queryString}` : path;
  }

  private async executeOperation(
    operationId: unknown,
    pathParams?: Record<string, unknown>,
    queryParams?: Record<string, unknown>,
    data?: any
  ) {
    const operation = this.resolveOperation(operationId);
    const path = this.buildOperationPath(operation, pathParams, queryParams);

    if (operation.hasBody && data === undefined) {
      throw new Error("data is required");
    }

    return this.client.request(operation.method, path, data);
  }

  private async runTool(name: string, input: any, callback: () => Promise<any>) {
    log("tool:start", { name, action: input?.action });

    try {
      const data = await callback();
      log("tool:success", {
        name,
        action: input?.action,
        resultType: Array.isArray(data) ? "array" : typeof data,
        count: Array.isArray(data) ? data.length : undefined
      });

      return this.result(data);
    } catch (error) {
      log("tool:error", {
        name,
        action: input?.action,
        message: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }

  registerEntity(entity: string) {

    const base = `/api/v1/${entity}`;
    const toolName = `panaya_${entity}`;

    this.server.tool(
      toolName,
      `Unified tool for ${entity} operations`,
      inputSchema,
      async (input: any) =>
        this.runTool(toolName, input, async () => {

          const { action, id, data, query, projectId } = input;

          switch (action) {

            case "list":
              return this.client.get(this.listPath(base, projectId));

            case "get":
              return this.client.get(
                `${base}/${encodeURIComponent(this.requireString(id, "id"))}`
              );

            case "create":
              return this.client.post(base, this.requireObject(data, "data"));

            case "update":
              return this.client.put(
                `${base}/${encodeURIComponent(this.requireString(id, "id"))}`,
                this.requireObject(data, "data")
              );

            case "delete":
              return this.client.delete(
                `${base}/${encodeURIComponent(this.requireString(id, "id"))}`
              );

            case "search":
              return this.client.post(`${base}/search`, this.requireObject(query, "query"));

            case "operation":
              return this.executeOperation(
                input.operationId,
                input.pathParams,
                input.queryParams,
                data
              );

            default:
              throw new Error(`Unknown action: ${action}`);
          }
        })
    );
  }

  registerOperationsTool() {
    this.server.tool(
      "panaya_operations",
      "Discover and execute any Panaya Swagger operation by operationId",
      operationsInputSchema,
      async (input: any) =>
        this.runTool("panaya_operations", input, async () => {
          switch (input.action) {
            case "list": {
              const search = String(input.search || "").toLowerCase();
              const tag = String(input.tag || "").toLowerCase();
              const limit = input.limit || 50;

              return PANAYA_OPERATIONS
                .filter((operation) => {
                  const haystack = [
                    operation.operationId,
                    operation.path,
                    operation.summary,
                    ...operation.tags
                  ].join(" ").toLowerCase();

                  return (!search || haystack.includes(search)) &&
                    (!tag || operation.tags.some((item) => item.toLowerCase() === tag));
                })
                .slice(0, limit)
                .map((operation) => this.operationSummary(operation));
            }

            case "describe":
              return this.operationSummary(this.resolveOperation(input.operationId));

            case "call":
              return this.executeOperation(
                input.operationId,
                input.pathParams,
                input.queryParams,
                input.data
              );

            default:
              throw new Error(`Unknown action: ${input.action}`);
          }
        })
    );
  }
}

import { SchemaBuilder } from "./schemaBuilder.js";
import { log } from "../logger.js";

export class ToolGenerator {

  constructor(private server: any, private client: any) {}

  private result(data: any) {
    const structuredContent = Array.isArray(data) ? { data } : data;

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

  private async runTool(name: string, callback: () => Promise<any>) {
    log("tool:start", { name });

    try {
      const data = await callback();
      log("tool:success", {
        name,
        resultType: Array.isArray(data) ? "array" : typeof data,
        count: Array.isArray(data) ? data.length : undefined
      });

      return this.result(data);
    } catch (error) {
      log("tool:error", {
        name,
        message: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }

  registerEntity(entity: string, metadata: any) {

    const schema = new SchemaBuilder().build(metadata);
    const base = `/api/v1/${entity}`;

    this.server.tool(
      `panaya_${entity}_list`,
      `List ${entity}`,
      async () => this.runTool(`panaya_${entity}_list`, () => this.client.get(base))
    );

    this.server.tool(
      `panaya_${entity}_get`,
      `Get ${entity}`,
      async ({ id }: any) =>
        this.runTool(`panaya_${entity}_get`, () => this.client.get(`${base}/${id}`))
    );

    this.server.tool(
      `panaya_${entity}_create`,
      `Create ${entity}`,
      async ({ data }: any) =>
        this.runTool(`panaya_${entity}_create`, () => this.client.post(base, data)),
      { inputSchema: schema }
    );

    this.server.tool(
      `panaya_${entity}_update`,
      `Update ${entity}`,
      async ({ id, data }: any) =>
        this.runTool(`panaya_${entity}_update`, () =>
          this.client.put(`${base}/${id}`, data)
        ),
      { inputSchema: schema }
    );

    this.server.tool(
      `panaya_${entity}_delete`,
      `Delete ${entity}`,
      async ({ id }: any) =>
        this.runTool(`panaya_${entity}_delete`, () => this.client.delete(`${base}/${id}`))
    );
  }
}

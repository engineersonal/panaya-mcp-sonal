const fs = require("node:fs");
const path = require("node:path");

const swaggerPath = process.argv[2];

if (!swaggerPath) {
  throw new Error("Usage: node scripts/generatePanayaOperations.cjs <swagger-json-path>");
}

const swagger = JSON.parse(fs.readFileSync(swaggerPath, "utf8"));
const basePath = swagger.basePath || "";
const operations = [];

for (const [apiPath, definition] of Object.entries(swagger.paths || {})) {
  for (const [method, operation] of Object.entries(definition || {})) {
    if (!["get", "post", "put", "delete", "patch"].includes(method)) {
      continue;
    }

    const parameters = [
      ...(definition.parameters || []),
      ...(operation.parameters || [])
    ];

    const pathParams = parameters
      .filter((parameter) => parameter.in === "path")
      .map((parameter) => ({
        name: parameter.name,
        required: parameter.required !== false,
        type: parameter.type || parameter.schema?.type || "string"
      }));

    const queryParams = parameters
      .filter((parameter) => parameter.in === "query")
      .map((parameter) => ({
        name: parameter.name,
        required: parameter.required === true,
        type: parameter.type || parameter.schema?.type || "string"
      }));

    const bodyParam = parameters.find((parameter) => parameter.in === "body");

    operations.push({
      operationId:
        operation.operationId ||
        `${method}_${apiPath.replace(/[^a-zA-Z0-9]+/g, "_")}`,
      method: method.toUpperCase(),
      path: basePath + apiPath,
      rawPath: apiPath,
      summary: operation.summary || "",
      tags: operation.tags || [],
      pathParams,
      queryParams,
      hasBody: Boolean(bodyParam)
    });
  }
}

operations.sort((a, b) => a.operationId.localeCompare(b.operationId));

const output = `export type PanayaOperation = {
  operationId: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  rawPath: string;
  summary: string;
  tags: string[];
  pathParams: Array<{ name: string; required: boolean; type: string }>;
  queryParams: Array<{ name: string; required: boolean; type: string }>;
  hasBody: boolean;
};

export const PANAYA_OPERATIONS: PanayaOperation[] = ${JSON.stringify(operations, null, 2)};
`;

const outputPath = path.resolve("src/generated/panayaOperations.ts");
fs.writeFileSync(outputPath, output);

console.log(`Generated ${operations.length} operations at ${outputPath}`);

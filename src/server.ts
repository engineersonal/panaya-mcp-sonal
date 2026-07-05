import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { PanayaClient } from "./client/panayaClient.js";
import { bootstrap } from "./runtime/bootstrap.js";

export async function createServer() {

  const server = new McpServer({
    name: "panaya-mcp-sonal",
    version: "1.0.0"
  });

  const client = new PanayaClient();

  await bootstrap(server, client);

  return server;
}

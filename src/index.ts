import { createServer } from "./server.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { log } from "./logger.js";

async function main() {
  const server = await createServer();
  const transport = new StdioServerTransport();

  await server.connect(transport);

  log("server:running", { transport: "stdio" });
}

main().catch((error) => {
  log("server:error", {
    message: error instanceof Error ? error.message : String(error)
  });
  process.exit(1);
});

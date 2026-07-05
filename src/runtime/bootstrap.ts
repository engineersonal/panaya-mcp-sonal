import { ApiDiscovery } from "../discovery/apiDiscovery.js";
import { ToolGenerator } from "../generator/toolGenerator.js";

export async function bootstrap(server: any, client: any) {

  const discovery = new ApiDiscovery(client);
  const generator = new ToolGenerator(server, client);

  generator.registerOperationsTool();

  const entities = await discovery.listEntities();

  for (const entity of entities) {
    generator.registerEntity(entity);
  }
}

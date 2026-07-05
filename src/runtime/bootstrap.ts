import { ApiDiscovery } from "../discovery/apiDiscovery.js";
import { ToolGenerator } from "../generator/toolGenerator.js";

export async function bootstrap(server: any, client: any) {

  const discovery = new ApiDiscovery(client);
  const generator = new ToolGenerator(server, client);

  const entities = await discovery.listEntities();

  for (const entity of entities) {
    const metadata = await discovery.getMetadata(entity);
    generator.registerEntity(entity, metadata);
  }
}

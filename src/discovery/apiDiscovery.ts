import { PanayaClient } from "../client/panayaClient.js";

export class ApiDiscovery {

  constructor(private client: PanayaClient) {}

  async listEntities(): Promise<string[]> {
    return [
      "projects",
      "requirements",
      "tests",
      "defects",
      "releases",
      "cycles",
      "businessProcesses"
    ];
  }

  async getMetadata(entity: string) {
    try {
      return await this.client.get(`/api/v1/${entity}/metadata`);
    } catch {
      return null;
    }
  }
}

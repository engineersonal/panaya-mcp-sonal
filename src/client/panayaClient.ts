import axios, { AxiosError } from "axios";
import { env } from "../config/env.js";
import { log } from "../logger.js";

export class PanayaClient {

  private apiToken?: string;
  private tokenRequest?: Promise<string>;

  private async headers(forceRefresh = false) {
    return {
      "X-Auth-Token": await this.getApiToken(forceRefresh),
      Accept: "application/json",
      "Content-Type": "application/json"
    };
  }

  private async getApiToken(forceRefresh = false) {
    if (!env.username) {
      return env.token;
    }

    if (this.apiToken && !forceRefresh) {
      return this.apiToken;
    }

    if (!this.tokenRequest || forceRefresh) {
      this.tokenRequest = this.createApiToken();
    }

    this.apiToken = await this.tokenRequest;
    this.tokenRequest = undefined;

    return this.apiToken;
  }

  private async createApiToken() {
    log("AUTH", { path: "/api/accesstoken" });

    const body = new URLSearchParams({
      username: env.username!,
      token: env.token
    });

    const response = await axios.post(`${env.baseUrl}/api/accesstoken`, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    if (!response.data?.token) {
      throw new Error("Panaya access token response did not include token");
    }

    return response.data.token;
  }

  private isUnauthorized(error: unknown) {
    return error instanceof AxiosError && error.response?.status === 401;
  }

  private async withTokenRefresh<T>(callback: (forceRefresh?: boolean) => Promise<T>) {
    try {
      return await callback(false);
    } catch (error) {
      if (!env.username || !this.isUnauthorized(error)) {
        throw error;
      }

      log("AUTH_REFRESH", { reason: "401" });
      this.apiToken = undefined;
      this.tokenRequest = undefined;

      return callback(true);
    }
  }

  async get(path: string) {
    log("GET", { path });
    return this.withTokenRefresh(async (forceRefresh) =>
      (await axios.get(env.baseUrl + path, {
        headers: await this.headers(forceRefresh)
      })).data
    );
  }

  async post(path: string, body: any) {
    log("POST", { path });
    return this.withTokenRefresh(async (forceRefresh) =>
      (await axios.post(env.baseUrl + path, body, {
        headers: await this.headers(forceRefresh)
      })).data
    );
  }

  async put(path: string, body: any) {
    log("PUT", { path });
    return this.withTokenRefresh(async (forceRefresh) =>
      (await axios.put(env.baseUrl + path, body, {
        headers: await this.headers(forceRefresh)
      })).data
    );
  }

  async patch(path: string, body: any) {
    log("PATCH", { path });
    return this.withTokenRefresh(async (forceRefresh) =>
      (await axios.patch(env.baseUrl + path, body, {
        headers: await this.headers(forceRefresh)
      })).data
    );
  }

  async delete(path: string) {
    log("DELETE", { path });
    return this.withTokenRefresh(async (forceRefresh) =>
      (await axios.delete(env.baseUrl + path, {
        headers: await this.headers(forceRefresh)
      })).data
    );
  }

  async request(method: string, path: string, body?: any) {
    switch (method.toUpperCase()) {
      case "GET":
        return this.get(path);
      case "POST":
        return this.post(path, body);
      case "PUT":
        return this.put(path, body);
      case "PATCH":
        return this.patch(path, body);
      case "DELETE":
        return this.delete(path);
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }
}

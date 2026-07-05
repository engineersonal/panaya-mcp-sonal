import axios from "axios";
import { env } from "../config/env.js";
import { log } from "../logger.js";

export class PanayaClient {

  private headers() {
    return {
      "X-Auth-Token": env.token,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    };
  }

  async get(path: string) {
    log("GET", { path });
    return (await axios.get(env.baseUrl + path, { headers: this.headers() })).data;
  }

  async post(path: string, body: any) {
    log("POST", { path });
    return (await axios.post(env.baseUrl + path, body, { headers: this.headers() })).data;
  }

  async put(path: string, body: any) {
    log("PUT", { path });
    return (await axios.put(env.baseUrl + path, body, { headers: this.headers() })).data;
  }

  async delete(path: string) {
    log("DELETE", { path });
    return (await axios.delete(env.baseUrl + path, { headers: this.headers() })).data;
  }
}

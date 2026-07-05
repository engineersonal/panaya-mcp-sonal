# Panaya MCP Server

A TypeScript-based Model Context Protocol (MCP) server that exposes Panaya REST APIs as MCP tools. It is designed to run over `stdio`, so it can be connected to Claude Desktop and other MCP-compatible clients.

The server discovers a fixed set of Panaya entities, registers one grouped MCP tool per entity, calls the Panaya REST API with `X-Auth-Token`, and returns responses in both Claude-readable text and machine-readable `structuredContent`.

## Features

- Runs as a local MCP server over stdio.
- Connects to Panaya REST APIs using `PANAYA_BASE_URL`, `PANAYA_USERNAME`, and `PANAYA_TOKEN`.
- Generates a short-lived Panaya API token through `POST /api/accesstoken` and sends that generated token as `X-Auth-Token`.
- Registers tools for common Panaya entities:
  - `projects`
  - `requirements`
  - `tests`
  - `defects`
  - `releases`
  - `cycles`
  - `businessProcesses`
- Provides a unified action-based tool for each entity.
- Supports `list`, `get`, `create`, `update`, `delete`, and `search` actions.
- Includes an API operation registry tool, `panaya_operations`, that can discover, describe, and call documented Panaya REST operations by `operationId`.
- Returns REST responses as formatted JSON text for Claude.
- Also returns structured JSON through MCP `structuredContent`.
- Writes server logs to `stderr`, keeping `stdout` clean for MCP protocol messages.
- Loads `.env` from the project root even when launched by Claude from another working directory.

## Project Structure

```text
src/
  client/
    panayaClient.ts       # Panaya REST client
  config/
    env.ts                # Environment loading and validation
  discovery/
    apiDiscovery.ts       # Entity discovery and metadata lookup
  generator/
    schemaBuilder.ts      # Metadata schema helper retained for future typed schemas
    toolGenerator.ts      # Registers grouped MCP tools for each entity
  generated/
    panayaOperations.ts   # Generated API operation registry
  runtime/
    bootstrap.ts          # Discovers entities and registers tools
  index.ts                # stdio MCP server entry point
  logger.ts               # stderr logger for Claude MCP logs
  server.ts               # MCP server factory
```

## Prerequisites

- Node.js 20 or newer is recommended.
- npm
- A valid Panaya API token.
- Claude Desktop, if you want to connect this server to Claude.

## Setup

Install dependencies:

```powershell
npm.cmd install
```

Create a local `.env` file from the example:

```powershell
Copy-Item .env.example .env
```

Edit `.env`:

```env
PANAYA_BASE_URL=https://your-panaya-host.example.com
PANAYA_USERNAME=your_panaya_username@example.com
PANAYA_TOKEN=your_long_lived_panaya_access_token_here
```

`PANAYA_TOKEN` should be the long-lived access token used by Panaya's `/api/accesstoken` endpoint. The MCP server exchanges it for a generated API token and uses the generated token in `X-Auth-Token`.

Do not commit `.env`. It contains credentials and is ignored by Git.

Build the TypeScript project:

```powershell
npm.cmd run build
```

## Running Locally

Start the compiled MCP server:

```powershell
npm.cmd start
```

This server is intended for MCP stdio clients. When run directly in a terminal, it will wait for MCP JSON-RPC messages on stdin.

## Claude Desktop Configuration

Open your Claude Desktop config file:

```text
C:\Users\sonal_sharma\AppData\Roaming\Claude\claude_desktop_config.json
```

Add this server inside the existing `mcpServers` object:

```json
{
  "mcpServers": {
    "panaya-mcp-sonal": {
      "command": "node",
      "args": [
        "C:\\Users\\sonal_sharma\\panaya-mcp-sonal\\dist\\index.js"
      ],
      "cwd": "C:\\Users\\sonal_sharma\\panaya-mcp-sonal"
    }
  }
}
```

If you already have other MCP servers configured, keep them and add only the `panaya-mcp-sonal` entry.

After editing the config:

1. Run `npm.cmd run build`.
2. Fully restart Claude Desktop.
3. Ask Claude to use the Panaya MCP server, for example:

```text
Use the Panaya MCP server to list projects.
```

## Available Tools

For each entity, the server registers one grouped tool:

```text
panaya_<entity>
```

Current tools:

```text
panaya_projects
panaya_requirements
panaya_tests
panaya_defects
panaya_releases
panaya_cycles
panaya_businessProcesses
```

The server also registers this operation registry tool:

```text
panaya_auth
panaya_operations
```

Use `panaya_auth` with `{ "action": "refresh" }` if a long Claude session needs to force-refresh the generated Panaya API token before continuing.

`panaya_operations` is generated from the official Panaya Postman collection. The current generated registry contains 146 curated API examples from `Shared Panaya Catalog of API examples.postman_collection.json`. Swagger can still be used as a fallback source if the Postman collection is unavailable.

Each tool accepts this input shape:

```json
{
  "action": "list",
  "id": "optional-id",
  "operationId": "optional-operation-id",
  "projectId": "optional-project-id",
  "pathParams": {},
  "queryParams": {},
  "data": {},
  "query": {}
}
```

Only `action` is required. Valid actions are:

```text
list
get
create
update
delete
search
operation
```

Action field requirements:

| Action | Required fields | REST call |
| --- | --- | --- |
| `list` | none | `GET /api/v1/<entity>` |
| `list` with project filter | `projectId` | `GET /api/v1/<entity>?projectId=<projectId>` |
| `get` | `id` | `GET /api/v1/<entity>/<id>` |
| `create` | `data` | `POST /api/v1/<entity>` |
| `update` | `id`, `data` | `PUT /api/v1/<entity>/<id>` |
| `delete` | `id` | `DELETE /api/v1/<entity>/<id>` |
| `search` | `query` | `POST /api/v1/<entity>/search` |
| `operation` | `operationId`, plus required `pathParams`, `queryParams`, and `data` | Calls the matching documented operation |

### Tool Examples

List all projects:

```json
{
  "action": "list"
}
```

List requirements for a project:

```json
{
  "action": "list",
  "projectId": "19051"
}
```

Get one project:

```json
{
  "action": "get",
  "id": "19051"
}
```

Search an entity:

```json
{
  "action": "search",
  "query": {
    "status": "ACTIVE"
  }
}
```

Create an entity:

```json
{
  "action": "create",
  "data": {
    "name": "Example"
  }
}
```

Update an entity:

```json
{
  "action": "update",
  "id": "19051",
  "data": {
    "name": "Updated Example"
  }
}
```

Delete an entity:

```json
{
  "action": "delete",
  "id": "19051"
}
```

Call a documented operation from a grouped entity tool:

```json
{
  "action": "operation",
  "operationId": "Create_Defect",
  "pathParams": {
    "projectId": "19051"
  },
  "data": {
    "name": "Example defect"
  }
}
```

### Operation Registry Tool

Use `panaya_operations` to discover, describe, or call documented REST operations that do not fit the simple grouped entity actions.

List operations:

```json
{
  "action": "list",
  "search": "defect",
  "limit": 10
}
```

Filter by operation tag/folder:

```json
{
  "action": "list",
  "tag": "Defects",
  "limit": 25
}
```

Describe one operation:

```json
{
  "action": "describe",
  "operationId": "Create_Defect"
}
```

Call one operation:

```json
{
  "action": "call",
  "operationId": "Get_All_Defects",
  "pathParams": {
    "projectId": "19051"
  },
  "queryParams": {
    "pageSize": 50,
    "pageNumber": 1
  }
}
```

For operations with a request body, include `data`:

```json
{
  "action": "call",
  "operationId": "Create_Defect",
  "pathParams": {
    "projectId": "19051"
  },
  "data": {
    "name": "Example"
  }
}
```

### Auth Tool

Force-refresh the generated Panaya API token:

```json
{
  "action": "refresh"
}
```

## Response Format

Tool responses include a text block for Claude:

```json
{
  "content": [
    {
      "type": "text",
      "text": "[{\"projectId\":123,\"projectName\":\"Example\"}]"
    }
  ]
}
```

They also include structured JSON for MCP clients that support it:

```json
{
  "structuredContent": {
    "data": [
      {
        "projectId": 123,
        "projectName": "Example"
      }
    ]
  }
}
```

Array responses are wrapped as `{ "data": [...] }` because MCP `structuredContent` must be an object.

## Logging

Logs are written to `stderr`, which Claude Desktop shows in the MCP server logs. This keeps `stdout` reserved for MCP protocol traffic.

Example log lines:

```text
[panaya-mcp-sonal] 2026-07-05T11:09:42.590Z tool:start {"name":"panaya_projects","action":"list"}
[panaya-mcp-sonal] 2026-07-05T11:09:42.590Z GET {"path":"/api/v1/projects"}
[panaya-mcp-sonal] 2026-07-05T11:09:42.658Z tool:success {"name":"panaya_projects","action":"list","resultType":"array","count":11}
```

The logger intentionally avoids printing tokens, headers, or request bodies.

## Security Notes

- Never commit `.env`.
- Keep `PANAYA_TOKEN` private.
- Keep `PANAYA_USERNAME` private if it identifies a real user account.
- Rotate the token immediately if it is accidentally shared.
- Review any create, update, or delete tool usage before allowing Claude or another MCP client to call it.
- Avoid logging request bodies if they may contain sensitive business data.
- Keep `node_modules/` and `dist/` out of Git; rebuild from source after cloning.

## Development Commands

Build:

```powershell
npm.cmd run build
```

Run compiled server:

```powershell
npm.cmd start
```

Run TypeScript source directly:

```powershell
npm.cmd run dev
```

Regenerate the operation registry from the official Panaya Postman collection:

```powershell
npm.cmd run generate:operations:postman -- "C:\Users\sonal_sharma\Desktop\Shared Panaya Catalog of API examples.postman_collection.json"
npm.cmd run build
```

If only Swagger metadata is available, regenerate from Swagger instead:

```powershell
npm.cmd run generate:operations:swagger -- C:\Users\sonal_sharma\Desktop\Panaya_Swagger.json
npm.cmd run build
```

Note: On some Windows systems, PowerShell blocks `npm.ps1`. Use `npm.cmd` if you see an execution policy error.

## Troubleshooting

### Claude Shows `Invalid URL`

This usually means `PANAYA_BASE_URL` was not loaded. Confirm that `.env` exists in the project root and contains:

```env
PANAYA_BASE_URL=https://your-panaya-host.example.com
PANAYA_USERNAME=your_panaya_username@example.com
PANAYA_TOKEN=your_long_lived_panaya_access_token_here
```

Then rebuild and restart Claude Desktop.

### Panaya Returns 401

Check that `PANAYA_USERNAME` and `PANAYA_TOKEN` are valid for the configured Panaya host. The server first calls:

```text
POST /api/accesstoken
```

Then it sends the generated token using:

```text
X-Auth-Token: <token>
```

For long-running Claude sessions, call `panaya_auth` with `{ "action": "refresh" }` and then retry the failed request.

### Claude Does Not Show the Server

Check that:

- `npm.cmd run build` completed successfully.
- `dist/index.js` exists.
- `claude_desktop_config.json` points to the correct absolute path.
- Claude Desktop was fully restarted after config changes.

### Logs Do Not Appear

Claude only captures MCP server logs from `stderr`. This project logs with `console.error()` through `src/logger.ts`.

## Git Hygiene

This repository includes a `.gitignore` that excludes:

- `.env` and other secret files
- `node_modules/`
- `dist/`
- logs and temporary files
- local IDE/tool state

Before pushing to GitHub, verify that secrets are not staged:

```powershell
git status
```

Only commit source, configuration templates, lockfiles, and documentation.

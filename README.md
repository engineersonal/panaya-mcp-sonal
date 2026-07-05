# Panaya MCP Server

A TypeScript-based Model Context Protocol (MCP) server that exposes Panaya REST APIs as MCP tools. It is designed to run over `stdio`, so it can be connected to Claude Desktop and other MCP-compatible clients.

The server discovers a fixed set of Panaya entities, registers CRUD-style MCP tools for each entity, calls the Panaya REST API with `X-Auth-Token`, and returns responses in both Claude-readable text and machine-readable `structuredContent`.

## Features

- Runs as a local MCP server over stdio.
- Connects to Panaya REST APIs using `PANAYA_BASE_URL` and `PANAYA_TOKEN`.
- Registers tools for common Panaya entities:
  - `projects`
  - `requirements`
  - `tests`
  - `defects`
  - `releases`
  - `cycles`
  - `businessProcesses`
- Provides list, get, create, update, and delete tools for each entity.
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
    schemaBuilder.ts      # Builds JSON-like input schemas from metadata
    toolGenerator.ts      # Registers MCP tools for each entity
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
PANAYA_TOKEN=your_panaya_api_token_here
```

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

## Available Tool Pattern

For each entity, the server registers tools using this naming pattern:

```text
panaya_<entity>_list
panaya_<entity>_get
panaya_<entity>_create
panaya_<entity>_update
panaya_<entity>_delete
```

Examples:

```text
panaya_projects_list
panaya_projects_get
panaya_requirements_list
panaya_tests_create
panaya_defects_update
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
[panaya-mcp-sonal] 2026-07-05T11:09:42.590Z tool:start {"name":"panaya_projects_list"}
[panaya-mcp-sonal] 2026-07-05T11:09:42.590Z GET {"path":"/api/v1/projects"}
[panaya-mcp-sonal] 2026-07-05T11:09:42.658Z tool:success {"name":"panaya_projects_list","resultType":"array","count":11}
```

The logger intentionally avoids printing tokens, headers, or request bodies.

## Security Notes

- Never commit `.env`.
- Keep `PANAYA_TOKEN` private.
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

Note: On some Windows systems, PowerShell blocks `npm.ps1`. Use `npm.cmd` if you see an execution policy error.

## Troubleshooting

### Claude Shows `Invalid URL`

This usually means `PANAYA_BASE_URL` was not loaded. Confirm that `.env` exists in the project root and contains:

```env
PANAYA_BASE_URL=https://your-panaya-host.example.com
PANAYA_TOKEN=your_panaya_api_token_here
```

Then rebuild and restart Claude Desktop.

### Panaya Returns 401

Check that `PANAYA_TOKEN` is valid for the configured Panaya host. This server sends the token using:

```text
X-Auth-Token: <token>
```

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

const fs = require("node:fs");
const path = require("node:path");

const collectionPath = process.argv[2];

if (!collectionPath) {
  throw new Error(
    "Usage: node scripts/generatePanayaOperationsFromPostman.cjs <postman-collection-json-path>"
  );
}

const collection = JSON.parse(fs.readFileSync(collectionPath, "utf8"));
const operations = [];
const usedOperationIds = new Set();

function slug(value) {
  return String(value || "operation")
    .replace(/{{|}}/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    || "operation";
}

function uniqueOperationId(base) {
  let candidate = slug(base);
  let index = 1;

  while (usedOperationIds.has(candidate)) {
    candidate = `${slug(base)}_${index}`;
    index += 1;
  }

  usedOperationIds.add(candidate);
  return candidate;
}

function normalizePath(url) {
  if (!url) {
    return "/";
  }

  if (typeof url === "string") {
    return normalizePathString(url);
  }

  if (Array.isArray(url.path)) {
    return normalizePathString(`/${url.path.join("/")}`);
  }

  if (url.raw) {
    return normalizePathString(url.raw);
  }

  return "/";
}

function normalizePathString(rawUrl) {
  const withoutQuery = rawUrl.split("?")[0];
  const withoutProtocol = withoutQuery.replace(/^[a-zA-Z]+:\/\/[^/]+/, "");
  const withoutVariables = withoutProtocol
    .replace(/^{{[^}]+}}/, "")
    .replace(/^\/?api(?=\/)/, "/api");

  const path = withoutVariables.startsWith("/")
    ? withoutVariables
    : `/${withoutVariables}`;

  return path
    .replace(/{{\s*([^}]+)\s*}}/g, "{$1}")
    .replace(/{{\s*([^}/]+)\s*}/g, "{$1}")
    .replace(/<\s*([^/>]+)\s*>/g, "{$1}")
    .replace(/<\s*([^/>]+)(?=\/|$)/g, "{$1}")
    .replace(/\/([^/{}<>]+)>/g, "/{$1}")
    .replace(/\/{2,}/g, "/");
}

function pathParamsFromPath(apiPath, url) {
  const names = new Set();

  for (const match of apiPath.matchAll(/{([^}]+)}/g)) {
    names.add(match[1]);
  }

  for (const variable of url?.variable || []) {
    if (variable.key) {
      names.add(variable.key);
    }
  }

  return [...names].map((name) => ({
    name,
    required: true,
    type: "string"
  }));
}

function queryParamsFromUrl(url) {
  return (url?.query || [])
    .filter((query) => query.key)
    .map((query) => ({
      name: query.key,
      required: query.disabled !== true && query.value !== undefined && query.value !== "",
      type: "string"
    }));
}

function hasBody(request) {
  return Boolean(request.body && request.body.mode);
}

function walk(items, parents = []) {
  for (const item of items || []) {
    if (item.item) {
      walk(item.item, [...parents, item.name].filter(Boolean));
      continue;
    }

    if (!item.request) {
      continue;
    }

    const request = item.request;
    const method = String(request.method || "GET").toUpperCase();

    if (!["GET", "POST", "PUT", "DELETE", "PATCH"].includes(method)) {
      continue;
    }

    const apiPath = normalizePath(request.url);
    const summary = request.description
      ? String(request.description).slice(0, 300)
      : item.name || "";
    const tags = parents.length > 0 ? parents : ["Postman"];

    operations.push({
      operationId: uniqueOperationId(item.name || `${method}_${apiPath}`),
      method,
      path: apiPath,
      rawPath: apiPath,
      summary,
      tags,
      pathParams: pathParamsFromPath(apiPath, request.url),
      queryParams: queryParamsFromUrl(request.url),
      hasBody: hasBody(request)
    });
  }
}

walk(collection.item || []);
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

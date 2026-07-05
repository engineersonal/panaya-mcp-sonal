export function log(message: string, details?: Record<string, unknown>) {
  const timestamp = new Date().toISOString();
  const suffix = details ? ` ${JSON.stringify(details)}` : "";

  console.error(`[panaya-mcp-sonal] ${timestamp} ${message}${suffix}`);
}

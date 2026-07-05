export class SchemaBuilder {

  build(metadata: any) {
    if (!metadata?.fields) {
      return { type: "object", properties: {} };
    }

    const properties: any = {};
    const required: string[] = [];

    for (const field of metadata.fields) {
      properties[field.name] = {
        type: "string",
        enum: field.values || undefined
      };

      if (field.required) required.push(field.name);
    }

    return {
      type: "object",
      properties,
      required
    };
  }
}

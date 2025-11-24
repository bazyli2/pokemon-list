import z from "zod";

export const typesResponseSchema = z
  .object({
    results: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  })
  .transform((data) => data.results.map((type) => type.name));

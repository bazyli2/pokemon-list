import { typeColors } from "@/typeColors";
import z from "zod";

export const typesResponseSchema = z
  .object({
    results: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  })
  .transform((data) =>
    data.results
      .filter(
        (type) =>
          type.name !== "unknown" &&
          type.name !== "shadow" &&
          type.name !== "stellar",
      )
      .map((type) => ({
        name: type.name,
        color: typeColors[type.name as keyof typeof typeColors],
      })),
  );

export const pokemonListResponseSchema = z
  .object({
    next: z.union([z.string(), z.null()]),
    results: z.array(
      z.object({
        url: z.string(),
      }),
    ),
  })
  .transform((data) => ({
    hasNextPage: data.next !== null,
    pokemons: data.results.map((pokemon) => {
      const parts = pokemon.url.split("/");
      const id = Number(parts[parts.length - 2]);
      return {
        id,
      };
    }),
  }));

export const pokemonDetailsSchema = z
  .object({
    id: z.number(),
    sprites: z.object({
      other: z.object({
        "official-artwork": z.object({
          front_default: z.string(),
        }),
      }),
    }),
    species: z.object({
      name: z.string(),
    }),
    types: z.array(
      z.object({
        type: z.object({ name: z.string() }),
      }),
    ),
  })
  .transform((data) => ({
    image: data.sprites.other["official-artwork"].front_default,
    name: data.species.name,
    types: data.types.map((type) => type.type.name),
    pokedexIndex: "#" + data.id.toString().padStart(3, "0"),
  }));

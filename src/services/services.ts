import { pokemonListResponseSchema, typesResponseSchema } from "./schema";

export async function fetchPokemonTypes() {
  const response = await fetch("https://pokeapi.co/api/v2/type?limit=100");
  const json = await response.json();
  return typesResponseSchema.parse(json);
}

export async function fetchPokemonList(offset: number, limit: number) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const json = await response.json();
  return {
    ...pokemonListResponseSchema.parse(json),
    offset: offset,
    limit: limit,
  };
}

import { typesResponseSchema } from "./schema";

export async function fetchPokemonTypes() {
  const response = await fetch("https://pokeapi.co/api/v2/type?limit=100");
  const json = await response.json();
  return typesResponseSchema.parse(json);
}

"use client";

import { usePokemonTypes } from "@/queries/usePokemonTypes";

export function PokemonTypes() {
  const { isPending, isError, data, error } = usePokemonTypes();
  if (isPending) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <ul>
      {data.map((pokemonType) => (
        <li key={pokemonType.name}>
          <div>{pokemonType.name}</div>
          <div>{pokemonType.color}</div>
        </li>
      ))}
    </ul>
  );
}

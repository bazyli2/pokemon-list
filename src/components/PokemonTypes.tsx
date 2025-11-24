"use client";

import { usePokemonTypes } from "@/queries/usePokemonTypes";
import { Chip } from "@mui/material";

export function PokemonTypes() {
  const { isPending, isError, data, error } = usePokemonTypes();
  if (isPending) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <ul className="flex gap-3">
      {data.map((pokemonType) => (
        <li key={pokemonType.name}>
          <Chip
            className="font-semibold capitalize text-white"
            label={pokemonType.name}
            style={{ backgroundColor: pokemonType.color }}
          />
        </li>
      ))}
    </ul>
  );
}

"use client";

import { usePokemonList } from "@/queries/usePokemonList";
import { Fragment } from "react/jsx-runtime";
import { PokemonCard } from "./PokemonCard";

export function PokemonList() {
  const { isPending, isError, data, error, fetchNextPage, hasNextPage } =
    usePokemonList(6);
  if (isPending) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <>
      <ul className="grid grid-cols-3 gap-3">
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} id={pokemon.id} />
            ))}
          </Fragment>
        ))}
      </ul>
      {hasNextPage && <button onClick={() => fetchNextPage()}>next</button>}
    </>
  );
}

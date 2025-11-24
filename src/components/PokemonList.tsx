"use client";

import { usePokemonList } from "@/queries/usePokemonList";
import { Fragment } from "react/jsx-runtime";

export function PokemonList() {
  const { isPending, isError, data, error, fetchNextPage, hasNextPage } =
    usePokemonList(1200);
  if (isPending) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <ul>
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.pokemons.map((pokemon) => (
            <div key={pokemon.id}>{pokemon.id}</div>
          ))}
        </Fragment>
      ))}
      {hasNextPage && <button onClick={() => fetchNextPage()}>next</button>}
    </ul>
  );
}

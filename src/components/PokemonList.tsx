"use client";

import { usePokemonList } from "@/queries/usePokemonList";
import { Fragment } from "react/jsx-runtime";
import { PokemonCard } from "./PokemonCard";

export function PokemonList() {
  const { isPending, isError, data, error, fetchNextPage, hasNextPage } =
    usePokemonList(20);
  if (isPending) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <ul>
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} id={pokemon.id} />
          ))}
        </Fragment>
      ))}
      {hasNextPage && <button onClick={() => fetchNextPage()}>next</button>}
    </ul>
  );
}

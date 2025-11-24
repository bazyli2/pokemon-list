"use client";

import { usePokemonList } from "@/queries/usePokemonList";
import { Fragment } from "react/jsx-runtime";
import { PokemonCard } from "./PokemonCard";
import { Button } from "@mui/material";

export function PokemonList() {
  const { isPending, isError, data, error, fetchNextPage, hasNextPage } =
    usePokemonList(6);
  if (isPending) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <>
      <ul className="grid grid-cols-3 gap-3 self-stretch">
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} id={pokemon.id} />
            ))}
          </Fragment>
        ))}
      </ul>
      {hasNextPage && (
        <Button
          className="rounded-full font-semibold normal-case"
          variant="contained"
          onClick={() => fetchNextPage()}
        >
          Load More
        </Button>
      )}
    </>
  );
}

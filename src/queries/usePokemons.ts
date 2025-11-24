import { fetchPokemonList } from "@/services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function usePokemons(props: Props) {
  const { pageSize = 20 } = props;
  const [offset, setOffset] = useState(0);
  const fetchNext = () => {
    setOffset((offset) => offset + pageSize);
  };
  const query = useQuery({
    queryKey: ["pokemon", "list", pageSize, offset],
    queryFn: () => fetchPokemonList(offset, pageSize),
    placeholderData: keepPreviousData,
  });
  return {
    ...query,
    fetchNext,
  };
}

interface Props {
  pageSize?: number;
}

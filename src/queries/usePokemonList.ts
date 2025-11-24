import { fetchPokemonList } from "@/services";
import { useInfiniteQuery } from "@tanstack/react-query";

export function usePokemonList(pageSize: number = 20) {
  const query = useInfiniteQuery({
    queryKey: ["pokemon", "list"],
    queryFn: ({ pageParam }) =>
      fetchPokemonList(pageParam * pageSize, pageSize),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNextPage) return lastPage.offset / pageSize + 1;
      return null;
    },
  });
  return {
    ...query,
  };
}

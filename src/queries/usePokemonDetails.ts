import { fetchPokemonDetails } from "@/services";
import { useQuery } from "@tanstack/react-query";

export function usePokemonDetails(id: number) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonDetails(id),
  });
}

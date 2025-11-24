import { fetchPokemonTypes } from "@/services";
import { useQuery } from "@tanstack/react-query";

export function usePokemonTypes() {
  return useQuery({
    queryKey: ["pokemon", "types"],
    queryFn: fetchPokemonTypes,
  });
}

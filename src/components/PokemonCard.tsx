import { usePokemonDetails } from "@/queries/usePokemonDetails";
import { typeColors } from "@/typeColors";
import { Chip } from "@mui/material";
import Image from "next/image";

export function PokemonCard(props: Props) {
  const {
    isPending,
    isError,
    data: pokemon,
    error,
  } = usePokemonDetails(props.id);

  if (isPending) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  const type = pokemon.types[0];
  return (
    <div
      style={{ backgroundColor: typeColors[type as keyof typeof typeColors] }}
      className="p-3 rounded-xl flex flex-col items-center"
    >
      <Image src={pokemon.image} alt={pokemon.name} width={100} height={100} />
      <div className="font-semibold text-xl">{pokemon.name}</div>
      <div>{pokemon.pokedexIndex}</div>
      <ul className="flex gap-2">
        {pokemon.types.map((type) => (
          <Chip
            className="text-white font-semibold capitalize"
            key={type}
            label={type}
          />
        ))}
      </ul>
    </div>
  );
}

interface Props {
  id: number;
}

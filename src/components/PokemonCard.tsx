import { usePokemonDetails } from "@/queries/usePokemonDetails";

export function PokemonCard(props: Props) {
  const { isPending, isError, data, error } = usePokemonDetails(props.id);

  if (isPending) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.image}</div>
    </div>
  );
}

interface Props {
  id: number;
}

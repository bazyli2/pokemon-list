import { PokemonList } from "@/components/PokemonList";
import { PokemonTypes } from "@/components/PokemonTypes";

export default function Home() {
  return (
    <div className="flex flex-col px-5 items-center gap-6 pt-10">
      bla
      <PokemonTypes />
      <PokemonList />
    </div>
  );
}

import { PokemonList } from "@/components/PokemonList";
import { PokemonTypes } from "@/components/PokemonTypes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col px-5 items-center gap-6 pt-10">
      <header className="flex items-center gap-3">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="Pokeball"
          width={50}
          height={50}
        />
        <h1 className="text-5xl text-orange-500 font-semibold">
          Pokémon Explorer
        </h1>
      </header>
      <PokemonTypes />
      <PokemonList />
    </main>
  );
}

import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList}) {

  const pokecards = pokeList.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pokecards}
    </Card.Group>
  );
}

export default PokemonCollection;

import React from "react";
import { mockPokemonData } from "../mock/pokeData.js";

function PokeCard(props) {
  var { name, video } = mockPokemonData;

  return (
    <div>
      <h1>{name}</h1>

      <PokeImage name={name} url={mockPokemonData.sprites.front_default} />
      <PokeImage name={name} url={mockPokemonData.sprites.front_shiny} />
      <a href={video} rel="noreferrer" target="_blank">
        Video
      </a>
    </div>
  );
}

function PokeImage(props) {
  return <img src={props.url} alt={props.name} />;
}

export default PokeCard;

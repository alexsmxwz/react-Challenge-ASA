import React from "react";
import { mockPokemonData } from "../mock/pokeData.js";

function PokeCard(props) {
  // get the info from the pokemon object
  var { name, video, sprites } = mockPokemonData;

  //iterate over the keys of the sprites
  const listItems = Object.keys(sprites).map(function (keyname, keyindex) {
    return <PokeImage url={sprites[keyname]} />;
  });

  //build the card using the list of items
  return (
    <div>
      <h1>{name}</h1>
      <div>{listItems}</div>
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

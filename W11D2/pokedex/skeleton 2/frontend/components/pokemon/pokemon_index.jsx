import React, { Component } from 'react'
import PokemonIndexItem from './pokemon_index_item'

export default class PokemonIndex extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.requestAllPokemon()
  }

  // pokemonItems() { pokemon.map(poke => (
  //   <PokemonIndexItem key={poke.id} pokemon={poke} />
  // ))};

  render() {
    return (
      <div>
        <ul>
          {this.props.pokemon.map((poke, idx)=> {
            return (
              <PokemonIndexItem key={poke.id} pokemon={poke} />
            );
          })}
        </ul>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class PokemonIndexItem extends Component {
  render() {
    return (
      <div>
        <li>
          <Link to={`/pokemon/${this.props.pokemon.id}`}>
            {this.props.pokemon.name}
            <img src={this.props.pokemon.image_url} height="42" width="42" />
          </Link>
        </li>
      </div>
    )
  }
}

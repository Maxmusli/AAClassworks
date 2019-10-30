import React, { Component } from 'react'


export default class PokemonDetail extends Component {
  componentDidMount() {
    // debugger
    this.props.requestPoke(this.props.match.params.id)
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.id != this.props.match.params.id){
      this.props.requestPoke(this.props.match.params.id);
    }
  }

  render() {
    if(!this.props.pokemon) return null //console.log(this.props.pokemon.image_url)
    
    return (
      <div>
        <h1>{this.props.pokemon.name}</h1>
        <img src={this.props.pokemon.image_url} />
      </div>
    )
  }
}

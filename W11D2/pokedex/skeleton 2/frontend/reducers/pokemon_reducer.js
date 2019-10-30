import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  // debugger
  switch(action.type) {
    case (RECEIVE_ALL_POKEMON):
      nextState = action.pokemon
      return nextState;
    case (RECEIVE_POKE):
      nextState[action.payload.poke.id] = action.payload.poke
      return nextState;
    
      // return action.payload.poke;
    default:
      return state;
  }
}

export default pokemonReducer
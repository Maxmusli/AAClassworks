import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    case (RECEIVE_POKE):
      nextState = action.payload.items // relation from pokemon model ??
      return nextState;
    default:
      return state;
  }
}

export default itemsReducer
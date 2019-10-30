import * as APIUtil from '../util/api_unil';
export const RECEIVE_POKE = "RECEIVE_POKE";
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon  //: APIUTIL.fetchAllPokemon()
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receivePoke = payload => {
  // debugger
  return {
    type: RECEIVE_POKE,
    payload: payload
  }
  
};

export const requestPoke = (id) => (dispatch) => (
  // debugger
  // console.log(APIUtil.fetchPoke())
  APIUtil.fetchPoke(id)
    .then(res => dispatch(receivePoke(res)))
);
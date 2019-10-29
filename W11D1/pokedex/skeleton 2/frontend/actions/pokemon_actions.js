import * as APIUTIL from '../util/api_unil';
// export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon  //: APIUTIL.fetchAllPokemon()
})


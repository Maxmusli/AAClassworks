export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
}

export const selectPoke = (state) => {
  console.log(state);
  return Object.values(state.entities.pokemon);
}
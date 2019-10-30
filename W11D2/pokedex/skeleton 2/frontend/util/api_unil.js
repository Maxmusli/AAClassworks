export const fetchAllPokemon = () => {
  return $.ajax({
    url: `/api/pokemon`,
    method: 'GET'
  })
}

export const fetchPoke = (id) => {
  return $.ajax({
    url: `/api/pokemon/${id}`,
    method: 'GET'
  })
}
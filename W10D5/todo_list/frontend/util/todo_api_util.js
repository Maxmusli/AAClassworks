export const fetchAllTodos = () => {
  return $.ajax({
    url: `/api/todos`,
    method: `GET`
  })
}


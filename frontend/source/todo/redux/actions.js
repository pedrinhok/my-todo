import axios from "axios"

export function create(todo) {
  return dispatch => {
    axios.post("http://localhost:8080/todo", todo)
      .then(response => dispatch(index()))
  }
}

export function done(todo) {
  const data = {
    done: !todo.done
  }
  return update(todo, data)
}

export function index() {
  return dispatch => {
    axios.get("http://localhost:8080/todo")
      .then(response => dispatch({
        type: "TODO_INDEX",
        payload: response.data
      }))
  }
}

export function remove(todo) {
  return dispatch => {
    axios.delete(`http://localhost:8080/todo/${todo._id}`)
      .then(response => dispatch(index()))
  }
}

export function update(todo, data) {
  return dispatch => {
    axios.put(`http://localhost:8080/todo/${todo._id}`, data)
      .then(response => dispatch(index()))
  }
}

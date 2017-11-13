const INITIAL_STATE = {}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TODO_INDEX":
      return { rows: action.payload }
    default:
      return state
  }
}

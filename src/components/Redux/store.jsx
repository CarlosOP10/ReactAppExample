import { createStore } from "redux"

const initialStore = {
  title: "TO DO LIST"
}

const reducer = (state = initialStore) => {
  return state
}

export default createStore(reducer)

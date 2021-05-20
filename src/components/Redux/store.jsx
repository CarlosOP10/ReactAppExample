import { createStore } from "redux"
import { ADD_ITEM_LIST, DELETE_ITEM_LIST } from "./actions"

const initialStore = {
  title: "TO DO LIST",
  toDoList: [
    {
      id: 1,
      message: "React Class"
    },
    {
      id: 2,
      message: "Ruby on Rails Class"
    },
    {
      id: 3,
      message: "Task React"
    },
    {
      id: 4,
      message: "Task Ruby on Rails"
    },
    {
      id: 5,
      message: "Standup Meeting"
    },
    {
      id: 6,
      message: "Meeting with Raul"
    },
    {
      id: 7,
      message: "Implement to do list"
    },
    {
      id: 8,
      message: "Install ruby on rails"
    }
  ],
  itemsFinish: []
}

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_ITEM_LIST:
      return {
        ...state,
        itemsFinish: state.itemsFinish.concat(action.data)
      }

    case DELETE_ITEM_LIST:
      return {
        ...state,
        itemsFinish: state.itemsFinish.filter((item) => item.id !== action.data)
      }
    default:
      return state
  }
}

export default createStore(reducer)

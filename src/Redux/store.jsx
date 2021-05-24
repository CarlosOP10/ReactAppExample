import { createStore } from 'redux'
import {
  ADD_ITEM_LIST,
  DELETE_ITEM_LIST,
  DELETE_ITEMS_TO_DO_LIST,
  ADD_ITEM_TO_DO_LIST
} from './actions'

const initialStore = {
  title: 'TO DO LIST',
  toDoList: [
    {
      id: 1,
      message: 'React Class'
    },
    {
      id: 2,
      message: 'Ruby on Rails Class'
    },
    {
      id: 3,
      message: 'Task React'
    },
    {
      id: 4,
      message: 'Task Ruby on Rails'
    },
    {
      id: 5,
      message: 'Standup Meeting'
    },
    {
      id: 6,
      message: 'Meeting with Raul'
    },
    {
      id: 7,
      message: 'Implement to do list'
    },
    {
      id: 8,
      message: 'Install ruby on rails'
    }
  ],
  itemsFinish: [],
  countToDoList: 8
}

const deleteItemToDoList = state => {
  let newTodoList = state.toDoList
  state.itemsFinish.forEach(item => {
    newTodoList = newTodoList.filter(todo => todo.id !== item.id)
  })
  return newTodoList
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
        itemsFinish: state.itemsFinish.filter(item => item.id !== action.data)
      }
    case DELETE_ITEMS_TO_DO_LIST:
      return {
        ...state,
        toDoList: deleteItemToDoList(state),
        itemsFinish: []
      }
    case ADD_ITEM_TO_DO_LIST:
      return {
        ...state,
        toDoList: state.toDoList.concat({
          id: state.countToDoList + 1,
          message: ''
        }),
        countToDoList: state.countToDoList + 1
      }
    default:
      return state
  }
}

export default createStore(reducer)

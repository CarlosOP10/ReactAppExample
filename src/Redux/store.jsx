import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  ADD_ITEM_LIST,
  DELETE_ITEM_LIST,
  DELETE_ITEMS_TO_DO_LIST,
  ADD_ITEM_TO_DO_LIST,
  START_GET_POKEMONS,
  GET_POKEMONS_SUCCESSFULLY,
  GET_POKEMONS_ERROR
} from './actions'

const initialStore = {
  title: 'TO DO LIST TEST HOLA 2 2',
  toDoList: [],
  itemsFinish: [],
  countToDoList: 0,
  isLoading: false,
  errorMessage: ''
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
    case START_GET_POKEMONS:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      }
    case GET_POKEMONS_SUCCESSFULLY:
      return {
        ...state,
        isLoading: false,
        toDoList: action.data,
        countToDoList: action.data.length
      }
    case GET_POKEMONS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.data
      }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))

import {
  ADD_ITEM_LIST,
  DELETE_ITEM_LIST,
  DELETE_ITEMS_TO_DO_LIST,
  ADD_ITEM_TO_DO_LIST,
  START_GET_POKEMONS,
  GET_POKEMONS_SUCCESSFULLY,
  GET_POKEMONS_ERROR
} from './actions'
import AxiosClient from '../AxiosClient/AxiosClient'

export const addItem = item => ({
  type: ADD_ITEM_LIST,
  data: item
})

export const deleteItem = id => ({
  type: DELETE_ITEM_LIST,
  data: id
})

export const deleteItemsToDoList = () => ({
  type: DELETE_ITEMS_TO_DO_LIST
})

export const addItemToDoList = () => ({
  type: ADD_ITEM_TO_DO_LIST
})

export const startGetPokemons = () => ({
  type: START_GET_POKEMONS
})

export const getPokemonsSuccessfully = data => ({
  type: GET_POKEMONS_SUCCESSFULLY,
  data
})

export const getPokemonsError = error => ({
  type: GET_POKEMONS_ERROR,
  data: error
})

export const getPokemons = () => {
  return async dispatch => {
    try {
      dispatch(startGetPokemons())
      const {
        data: { results }
      } = await AxiosClient.get('/pokemon')

      const pokemons = results.map((pokemon, id) => ({
        ...pokemon,
        id: id + 1
      }))
      dispatch(getPokemonsSuccessfully(pokemons))
    } catch (error) {
      dispatch(getPokemonsError(error))
    }
  }
}

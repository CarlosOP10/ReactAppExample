import { ADD_ITEM_LIST, DELETE_ITEM_LIST } from "./actions"

export const addItem = (item) => ({
  type: ADD_ITEM_LIST,
  data: item
})

export const deleteItem = (id) => ({
  type: DELETE_ITEM_LIST,
  data: id
})

export const GET_TODO_ITEMS = 'GET_TODO_ITEMS';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const UPDATE_TODO_ITEM_STATUS = 'UPDATE_TODO_ITEM_STATUS';

export function getTodoItems() {
  return {
    type: GET_TODO_ITEMS
  }
}

export function addTodoItem(item) {
  return {
    type: ADD_TODO_ITEM,
    payload: {
      item
    },
  }
}

export function removeTodoItem(index) {
  return {
    type: REMOVE_TODO_ITEM,
    payload: {
      index
    },
  }
}

export function updateTodoItemStatus(index,done) {
  return {
    type: UPDATE_TODO_ITEM_STATUS,
    payload: {
      index,
      done
    },
  }
}
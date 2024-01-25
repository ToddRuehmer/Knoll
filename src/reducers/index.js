import '../globals';
import { GET_TODO_ITEMS } from '../actions';
import { ADD_TODO_ITEM } from '../actions';
import { REMOVE_TODO_ITEM } from '../actions';
import { UPDATE_TODO_ITEM_STATUS } from '../actions';
import { TodoItem } from '../components/ListItem';
import axios from 'axios';

const initialState = {
  count: 0,
  todoList: []
};
 
export default function rootReducer(state = initialState, action) {
  let todoList = [];
  
  if (action.type == GET_TODO_ITEMS) {
    axios.get('/todoitems/get')
      .then(function (response) {
        // handle success
        console.log(response);
        todoList = response.data;
    
        localStorage.setItem('todoList', JSON.stringify(todoList));

        return {
          ... initialState,
          todoList: todoList
        };
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  } else {
    switch (action.type) {
      case ADD_TODO_ITEM:
        todoList = [...state.todoList, new TodoItem(
          action.payload.item,
          { done: false, text: 'Not Done' })
        ];
        
        localStorage.setItem('todoList', JSON.stringify(todoList));

        return {
          ... initialState,
          todoList: todoList
        };
      case REMOVE_TODO_ITEM:
        todoList = [...state.todoList.slice(0, action.payload.index), ...state.todoList.slice(action.payload.index + 1)];
        
        localStorage.setItem('todoList', JSON.stringify(todoList));

        return {
          ... initialState,
          todoList: todoList
        };
      case UPDATE_TODO_ITEM_STATUS:
      todoList = state.todoList;

        todoList[action.payload.index].done = !todoList[action.payload.index].done;
        
        localStorage.setItem('todoList', JSON.stringify(todoList));

        return {
          ... initialState,
          todoList: todoList
        };
      default:
        return state;
    }
  }
}
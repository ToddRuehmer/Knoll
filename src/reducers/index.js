import '../globals';
import { ADD_TODO_ITEM } from '../actions';
import { REMOVE_TODO_ITEM } from '../actions';
import { UPDATE_TODO_ITEM_STATUS } from '../actions';
import { TodoItem } from '../components/ListItem';

const initialState = {
  count: 0,
  todoList: []
};
 
export default function rootReducer(state = initialState, action) {
  let todoList = [];
  
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
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

const persistedListState = localStorage.getItem('todoList');
const initialListState = persistedListState ? JSON.parse(persistedListState) : [];

const store = createStore(rootReducer, {todoList:initialListState});
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
unsubscribe();
console.log("state",store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
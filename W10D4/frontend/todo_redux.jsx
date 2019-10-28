import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import todosReducer from './reducers/todos_reducer';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import App from '../frontend/components/app';
// import {allTodos} from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  // const todos = allTodos(state);
  window.store = store;
  // window.todos = todos;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<App />, root);

})
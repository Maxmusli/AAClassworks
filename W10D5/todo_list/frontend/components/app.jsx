import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';
import TodoFormContainer from './todo_list/todo_form_container';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
};

export default App;
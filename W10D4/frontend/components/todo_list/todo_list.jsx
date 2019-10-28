import React from 'react';
import TodoListItem from './todo_list_item';

const todoList = (props) => {
  return (
    <div>
      <h2>All todos</h2>
      <ul>
        <TodoListItem todos={props.todos}/>
      </ul>
    </div>
  )
}

export default todoList;
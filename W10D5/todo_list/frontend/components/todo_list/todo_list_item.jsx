import React, { Component } from 'react';
// import todosReducer from '../../reducers/todos_reducer';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // debugger
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.title} <br />
              {todo.body}
            </li>
          )
        })}
      </div>
    )
  }
}

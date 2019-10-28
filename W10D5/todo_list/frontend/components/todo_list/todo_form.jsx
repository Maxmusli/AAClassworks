import React, { Component } from 'react'
import uniqueId from '../../util/random_id';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      id: uniqueId()
    };

    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      title: "",
      body: "",
      id: uniqueId()
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add Todo</h4>
        <label>Title:
          <input 
            onChange={this.updateTitle} 
            type="text"
            value={this.state.title}
          />
        </label>
        <label>Body:
          <input 
            onChange={this.updateBody}
            type="text"
            value={this.state.body}
          />
        </label>
        <input type="submit" value="Add Todo"/>
      </form>
    )
  }
}

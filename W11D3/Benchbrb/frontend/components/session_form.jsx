import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SessionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const display = this.props.formType === 'login' ? (
      <div>
        <h1>Login</h1>
        <Link to='/login'>Login</Link>
        <form onSubmit={(e) => { this.handleSubmit(e) }}>
          <label>Username:
            <input 
              type="text" 
              onChange={this.handleInput('username')}
              value={this.state.username}
            />
          </label><br/>
          <label>Password:
            <input 
              type="password" 
              onChange={this.handleInput('password')}
              value={this.state.password}
            />
          </label><br/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    ) : (
      <div>
        <h1>Sign Up</h1>
        <Link to='/signup'>Sign Up</Link>
        <form onSubmit={(e) => { this.handleSubmit(e) }}>
          <label>Username:
          <input
              type="text"
              onChange={this.handleInput('username')}
              value={this.state.username}
            />
          </label><br />
          <label>Password:
          <input
              type="password"
              onChange={this.handleInput('password')}
              value={this.state.password}
            />
          </label><br />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )

    return (
      <div>
        {display}
        <div>
          {this.props.errors}
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Signup extends Component {
  // create local state
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this) // don't need to bind handleInput??
  }

  // handling input from username, email, password
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault(); //prevent page from rerender
    this.props.createNewUser(this.state) // pass in all local state info to create new user
    .then(() => this.props.history.push('/chirps'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up</h2>
        <form>
          <label>Username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleInput('username')} 
            />
          </label>
          <label>Email:
            <input 
              type="text" 
              value={this.state.email} 
              onChange={this.handleInput('email')} 
            />
          </label>
          <label>Password:
            <input 
              type="password" 
              value={this.state.password} 
              onChange={this.handleInput('password')} 
            />
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )
  }
}

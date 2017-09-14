import React { Component } from 'react'

export default class LoginForm extends Component {
  constructor(){
    super()

    this.state = {
      username: "",
      password: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(field, event){
    this.setState({
      [field]: event.target.value
    })
  }

  handleFormSubmit(event){
    debugger
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render(){
  return (
    <form onSubmit={this.handleSubmit}>
      <label>Username</label>
      <input type='text' value={this.state.username} name="username" onChange={this.handleChange}/>
      <label>Password</label>
      <input type='password' value={this.state.password} name="password" onChange={this.handleChange}/>
      <input type="submit" />
    </form>
    )
  }
}

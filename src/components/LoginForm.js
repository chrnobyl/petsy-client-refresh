import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

export default class LoginForm extends Component {
  constructor(){
    super()

    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    // this.props.onSubmit(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render(){
    return (
      <Form size='small' onSubmit={this.handleSubmit}>
        <Form.Field>
        <label>Username</label>
        <Input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
        </Form.Field>

        <Form.Field>
        <label>Password</label>
        <Input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
        </Form.Field>

        <Form.Button>Log In</Form.Button>
      </Form>
    )
  }
}

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
    event.preventDefault()
    const {username, password} = this.state
    if (!username || !password){
      return "error"
    }
  }
}

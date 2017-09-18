import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import Container from './Container'
import LoginForm from './LoginForm'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="body">
          <NavBar />
          <Container />
        </div>
        <LoginForm className="loginForm" />
      </div>
    )
  }
}

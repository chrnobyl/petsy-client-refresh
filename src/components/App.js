import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import Container from './Container'

export default class App extends Component {
  render() {
    return (
      <div className="body">
        <NavBar />
        <Container />
      </div>
    )
  }
}

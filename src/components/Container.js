import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PetList from './PetList'
import UserPets from './UserPets'

export default class Container extends Component {
  constructor(){
    super()
    this.state = {
      pets: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/pets')
    .then(res => res.json())
    .then(data => {
      this.setState({ pets: data })
    })
  }


  render(){
    return (
      <div>
        <PetList pets={this.state.pets} />
        <UserPets />
      </div>
    )
  }

}

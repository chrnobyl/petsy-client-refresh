import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PetAdapter from '../adapters/PetAdapter'
import PetList from './PetList'
import UserPets from './UserPets'

export default class Container extends Component {
  constructor(){
    super()
    this.state = {
      pets: [],
      petNum: 1
    }
  }

  componentDidMount(){
    PetAdapter.all()
    .then(data => {
      this.setState({ pets: data })
    })
  }

  yesPet(){
    PetAdapter.createUserPet(this.state.petNum)
    this.setState((prevState) => {
      petNum: prevState + 1
    })
  }

  noPet(){
    this.setState((prevState) => {
      petNum: prevState + 1
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

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
    this.yesPet = this.yesPet.bind(this)
    this.noPet = this.noPet.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
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
      petNum: prevState.petNum += 1
    })
  }

  noPet(){
    this.setState((prevState) => {
      petNum: prevState.petNum += 1
    })
  }

  handleKeyPress(event){
    event.preventDefault()
    console.log(this.state.petNum)
    if(event.keyCode === 39){
      return this.yesPet()
    } else if (event.keyCode === 37){
      return this.noPet()
    }
  }


  render(){
    return (
      <div>
        <PetList pets={this.state.pets} petNum={this.state.petNum} />
        <UserPets pets={this.state.pets} handleKeyPress={this.handleKeyPress}/>
        <input onKeyDown={this.handleKeyPress} />
      </div>
    )
  }

}

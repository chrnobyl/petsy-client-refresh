import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import keydown from 'react-keydown'
import PetAdapter from '../adapters/PetAdapter'
import PetList from './PetList'
import UserPets from './UserPets'
import DisplayPet from './DisplayPet'

export default class Container extends Component {
  constructor(){
    super()
    this.state = {
      petNum: 1,
      pets: [],
      userPets: []
    }

    this.yesPet = this.yesPet.bind(this)
    this.noPet = this.noPet.bind(this)
  }

  componentDidMount(){
    PetAdapter.all()
    .then(data => {
      data.filter(d => d.sex === "female")
      this.setState({ pets: data })
    })
    PetAdapter.allUserPets()
    .then(data => {
      this.setState({ userPets: data })
    })
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  yesPet(){
    let newPetNum = this.state.petNum + 1
    PetAdapter.createUserPet(this.state.petNum)
    .then( resp => (
      PetAdapter.allUserPets()
      .then(data => {
        this.setState({
          petNum: newPetNum,
          userPets: data
        })
      }))
    )
  }

  noPet(){
    console.log("no")
    this.setState((prevState) => {
      petNum: prevState.petNum += 1
    })
  }

  handleKeyDown(event){
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
        <DisplayPet pet={this.state.pets[this.state.petNum - 1]} petNum={this.state.petNum} yesPet={this.yesPet} noPet={this.noPet} />
        <UserPets className="element" pets={this.state.userPets} />
      </div>
    )
  }
}

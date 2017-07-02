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
      userPets: [],
      petNum: 1
    }
    this.yesPet = this.yesPet.bind(this)
    this.noPet = this.noPet.bind(this)
    // this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount(){
    PetAdapter.all()
    .then(data => {
      this.setState({ pets: data })
    })
    PetAdapter.allUserPets()
    .then(data => {
      this.setState({ userPets: data })
    })
  }

  yesPet(){
    console.log('Yes!!!')
    // console.log(`About to send ${this.state.petNum} to Rails`)
    PetAdapter.createUserPet(this.state.petNum)
    let newPetNum = this.state.petNum + 1
    this.setState( Object.assign({},this.state,{petNum: newPetNum}) )
    PetAdapter.allUserPets()
    .then(data => {
      console.log(data)
      this.setState(Object.assign({},this.state,{userPets:data}))
    })
    //let newState = this.state.petNum += 1
    // console.log(`State is...`)
    // console.log(this.state)
    // console.log(this.state.petNum)

    // console.log(newPetNum)

    // console.log(`The new state is...`)
    // console.log(this.state)

  }

  noPet(){
    console.log("no")
    this.setState((prevState) => {
      petNum: prevState.petNum += 1
    })
  }

  // handleKeyPress(event){
  //   event.preventDefault()
  //   console.log(this.state.petNum)
  //   if(event.keyCode === 39){
  //     return this.yesPet()
  //   } else if (event.keyCode === 37){
  //     return this.noPet()
  //   }
  // }


  render(){
    return (
      <div>
        <PetList pets={this.state.pets} petNum={this.state.petNum} />
        <UserPets className='col-md-8' pets={this.state.userPets} />
        <button className="btn btn-default" onClick={this.yesPet}>yes</button>
        <button className="btn btn-default" onClick={this.noPet}>no</button>
      </div>
    )
  }

}

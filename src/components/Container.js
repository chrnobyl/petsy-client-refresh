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
    let newPetNum = this.state.petNum + 1
    console.log('Yes!!!')
    // console.log(`About to send ${this.state.petNum} to Rails`)
    PetAdapter.createUserPet(this.state.petNum)
    .then( resp => (
      PetAdapter.allUserPets()
      .then(data => {
        console.log(data)
        console.log('About to update state')
        console.log('state is')
        console.log(this.state)
        this.setState({
          petNum: newPetNum,
          userPets: data
        })
        console.log('new state is')
        console.log(this.state)
      }))
    )

    // this.setState( Object.assign({},this.state,{petNum: newPetNum}) )


  }

  noPet(){
    console.log("no")
    this.setState((prevState) => {
      petNum: prevState.petNum += 1
    })
  }


  render(){
    return (
      <div>
        <button className="btn btn-default" onClick={this.yesPet}>yes</button>
        <button className="btn btn-default" onClick={this.noPet}>no</button>
        <DisplayPet pet={this.state.pets[this.state.petNum - 1]} petNum={this.state.petNum} />
        <UserPets className='col-md-8' pets={this.state.userPets} />
      </div>
    )
  }

}

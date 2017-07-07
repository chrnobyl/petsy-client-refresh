import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { browserHistory } from 'react-router';
import PetAdapter from '../adapters/PetAdapter'
import PetList from './PetList'
import UserPets from './UserPets'
import DisplayPet from './DisplayPet'
import FilterForm from './FilterForm'
import PetDetail from './PetDetail'

export default class Container extends Component {
  constructor(){
    super()
    this.state = {
      petNum: 1,
      pets: [],
      userPets: [],
      userPetIds: [],
      shelters: [],
      detail: false,
      modal: false
    }

    this.yesPet = this.yesPet.bind(this)
    this.noPet = this.noPet.bind(this)
    this.showDetail = this.showDetail.bind(this)
    this.showModal = this.showModal.bind(this)
    this.deleteUserPet = this.deleteUserPet.bind(this)
    this.uniq = this.uniq.bind(this)
  }

  componentDidMount(){
    PetAdapter.all()
    .then(data => {
      this.setState({ pets: data })
    })
    PetAdapter.allUserPets()
    .then(data => {
      this.setState({
        userPets: data.filter((d, i) => data.indexOf(d) === i),
        userPetIds: data.map(d => d.id)
      })
    })
    PetAdapter.allShelters()
    .then(data => {
      this.setState({
        shelters: data
      })
    })
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  uniq(array) {
   return Array.from(new Set(array));
  }

  yesPet(){
    let newPetNum = this.state.petNum + 1
    console.log(this.state.userPetIds)
    console.log(newPetNum)
    if (this.state.userPetIds.includes(this.state.petNum)){
      this.setState({
        petNum: newPetNum
      })
    } else {
      PetAdapter.createUserPet(this.state.petNum)
      .then(res => {
        this.setState((prevState) => ({
          petNum: newPetNum,
          userPets: [...prevState.userPets, res].filter(pet => pet.id !== newPetNum),
          userPetIds: [...prevState.userPetIds, res.pet_id]
        }))
      })
    }
  }

  noPet(){
    console.log("no")
    this.setState((prevState) => {
      petNum: prevState.petNum += 1
    })
  }

  showDetail(){
    console.log("detail")
    this.setState({
      detail: !this.state.detail
    })
  }

  showModal(){
    console.log("modal")
    this.setState({
      modal: !this.state.modal
    })
  }

  deleteUserPet(id){
    PetAdapter.destroyUserPet(id)
    .then( () => {
      console.log(this.state.userPets)
      this.setState(prevState => {
        return {
          userPets: prevState.userPets.filter(pet => pet.id !== id),
          userPetIds: prevState.userPetIds.filter(num => num !== id)
        }
      })
      console.log(this.state.userPets)
    })
    debugger
  }

  handleKeyDown(event){
    event.preventDefault()
    console.log(this.state.petNum)
    if(event.keyCode === 39){
      return this.yesPet()
    } else if (event.keyCode === 37){
      return this.noPet()
    } else if (event.keyCode === 40){
      return this.showDetail()
    } else if (event.keyCode === 38){
      return this.showModal()
    }
  }

  render(){
    return (
      <div>
        <DisplayPet pet={this.state.pets[this.state.petNum - 1]} yesPet={this.yesPet} noPet={this.noPet} showDetail={this.showDetail} detail={this.state.detail} />
        <UserPets className="element" pets={this.state.userPets} deleteUserPet={this.deleteUserPet} />
        <FilterForm show={this.state.modal} onClose={this.showModal} pets={this.state.pets} shelters={this.state.shelters}/>
        <Switch>
          <Route exact path='/pets/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const pet = this.state.pets.find( p =>  p.id === parseInt(id) )
                if(!pet){
                routerProps.history.push("/pets")
                return null
                } else {
                  return <PetDetail pet={pet} deleteUserPet={this.deleteUserPet} />
                }
              }}
            />
          {/* <Route exact path='/users/1' render={ <FilterForm />} /> */}
        </Switch>
      </div>
    )
  }
}

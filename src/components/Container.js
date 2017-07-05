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
      selected: []
    }

    this.yesPet = this.yesPet.bind(this)
    this.noPet = this.noPet.bind(this)
    this.showDetail = this.showDetail.bind(this)
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

  showDetail(){
    console.log("detail")
    // routerProps.history.push(`/pets/${this.state.petNum}`)
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
    }
  }

  render(){
    return (
      <div>
        <DisplayPet pet={this.state.pets[this.state.petNum - 1]} petNum={this.state.petNum} yesPet={this.yesPet} noPet={this.noPet} />
        <UserPets className="element" pets={this.state.userPets} />
        <FilterForm selected={this.state.selected} />
        <Switch>
          <Route exact path='/pets/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const pet = this.state.pets.find( p =>  p.id === parseInt(id) )
                if(!pet){
                routerProps.history.push("/pets")
                return null
              }
              return <PetDetail pet={pet} />
            }} />
        </Switch>
      </div>
    )
  }
}

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Image, List, Dimmer, Loader, Segment  } from 'semantic-ui-react'
// import PetAdapter from '../adapters/PetAdapter'
// import PetDetail from './PetDetail'

import React, { Component } from 'react'
import { Grid, Menu, Segment, Button } from 'semantic-ui-react'
import '../App.css';

export default class PetDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeItem: '',
      pets: []
     }

    }
    componentDidReceiveProps(props){
      this.setState({
        pets: props.pets
      })
    }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    debugger
    const { activeItem } = this.state

    return (
      <Grid>
          <Grid.Column stretched width={12}>
            {this.state.pets.map(pet => {
            <Segment>
              {pet.name}, Age {pet.age}
              <img src={pet.picture} />
              {pet.description}
              <Button onClick={() => this.props.deleteUserPet(pet.id)}>Remove pet from list</Button>
            </Segment>
            })}
        </Grid.Column>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular='right'>
            {this.state.pets.map(pet => {
            <Menu.Item name={pet.name} active={activeItem === pet.name} onClick={this.handleItemClick} />
          })}
          </Menu>
        </Grid.Column>
      </Grid>
    )
  }
}

// export default function UserPets(props) {
//   if (props.pets.length >= 1) {
//   return (
//     <div className="right">
//       <List animated verticalAlign='middle' size="massive">
//         {props.pets.map((pet, i) => {
//           return (
//             <List.Item key={i} as={ Link } to={`/pets/${pet.id}`} >
//               <Image avatar src={pet.picture} />
//               <List.Content>
//                 <List.Header>
//                   {pet.name}
//                 </List.Header>
//               </List.Content>
//             </List.Item>
//           )
//         })}
//       </List>
//     </div>
//   )
//   } else {
//     return (
//       <div className="right">
//         <h2>No pets yet!</h2>
//       </div>
//     )
//   }
// }

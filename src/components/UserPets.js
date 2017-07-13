import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, List, Dimmer, Loader, Segment, Button, Modal  } from 'semantic-ui-react'
import PetAdapter from '../adapters/PetAdapter'
// import PetDetail from './PetDetail'

export default function UserPets(props) {
  if (props.pets.length >= 1) {
  return (
    <div className="right">
      <List celled relaxed verticalAlign="middle" size="massive">
        {props.pets.map((pet, i) => {
          return (
            <List.Item key={i}>
                <Image avatar src={pet.picture} />
              <List.Content>
                <List.Header as={ Link } to={`/pets/${pet.id}`}>
                  {pet.name}
                </List.Header>
                <Modal trigger={<Button size="large">Pet Details</Button>} closeIcon="close" size="large">
                  <Modal.Content>
                    <div><h3>{pet.name}, Age: {pet.age}</h3></div>
                    <div className="img"><Image src={pet.picture} size="large"/></div>
                    <div>{pet.description}</div>
                    <div><h4>To set up a meeting with {pet.name}, send an email to the shelter at {pet.email}.</h4></div>
                    <Button negative onClick={() => props.deleteUserPet(pet.id)}>Remove pet from list</Button>
                  </Modal.Content>
                </Modal>
                <Button size="large" icon='remove' onClick={() => props.deleteUserPet(pet.id)} />
              </List.Content>
            </List.Item>
          )
        })}
      </List>
    </div>
  )
  } else {
    return (
      <div className="right">
        <h2>Choose a pet to get started.</h2>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, List, Dimmer, Loader, Segment  } from 'semantic-ui-react'
import PetAdapter from '../adapters/PetAdapter'
// import PetDetail from './PetDetail'

export default function UserPets(props) {
  if (props.pets.length >= 1) {
  return (
    <div className="right">
      <List animated verticalAlign='middle' size="massive">
        {props.pets.map((pet, i) => {
          return (
            <List.Item key={i} as={ Link } to={`/pets/${pet.id}`} >
              <Image avatar src={pet.picture} />
              <List.Content>
                <List.Header>
                  {pet.name}
                </List.Header>
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

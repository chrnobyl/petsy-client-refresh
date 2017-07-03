import React, { Component } from 'react'
import { Image, List } from 'semantic-ui-react'
import PetAdapter from '../adapters/PetAdapter'
import Pet from './Pet'

export default function UserPets(props) {
  if (props.pets.length >= 1) {
  return (
    <div className="right">
      <List animated verticalAlign='middle'>
        {props.pets.map((pet, i) => {
          return (
            <List.Item key={i}>
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
      <h2 align="right">loading pets...</h2>
    )
  }
}

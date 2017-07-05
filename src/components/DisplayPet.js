import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button, Segment, Dimmer, Loader } from 'semantic-ui-react'
// import PetDetail from './PetDetail'

const DisplayPet = (props) => {

  function returnPet(props) {
    if (props.pet === undefined) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Looking for pets...</Loader>
        </Dimmer>
      )
    } else {
      return (
        <Card as={ Link } to={`/pets/${props.pet.id}`}>
          <Image src={props.pet.picture} size="huge"/>
          <Card.Content>
            <Card.Header>
              {props.pet.name}
            </Card.Header>
            <Card.Meta>
              <span className="age">
                Age {props.pet.age}
              </span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              North Shore Animal League
            </a>
            <Button secondary onClick={props.noPet}>Next</Button>
            <Button
              color="green"
              content="Adopt"
              icon="heart" onClick={props.yesPet}
            />
          </Card.Content>
        </Card>
      )
    }
  }

  return (
    <div className="center">
      {returnPet(props)}
    </div>
  )
}

export default DisplayPet

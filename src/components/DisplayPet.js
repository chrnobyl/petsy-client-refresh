import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button, Segment, Dimmer, Loader } from 'semantic-ui-react'
// import PetDetail from './PetDetail'

const DisplayPet = (props) => {

  function returnPet(props) {

    if (props.pet === undefined) {
      return (
        <h3>No pets found. Update your filter settings to see more pets.</h3>
      )
    } else if (props.detail === true){
      return (
        <Card raised="true" color="red">
          <Image src={props.pet.picture} size="huge"/>
          <Card.Content>
            <Card.Header color="green">
              {props.pet.name}
            </Card.Header>
            <Card.Meta>
              <span className="age">
                Age: {props.pet.age}
              </span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href={`mailto:${props.pet.email}`}>
              <Icon name="home" />
              {props.pet.shelter}
            </a>
            <div>
            <Button secondary onClick={props.noPet}>Next</Button>
            <Button color="purple" onClick={props.showDetail}>Bio</Button>
            <Button
              color="green"
              content="Adopt"
              icon="heart" onClick={props.yesPet}
            />
          </div>
          </Card.Content>
          <Card.Content extra>
            <p>{props.pet.description}</p>
          </Card.Content>
        </Card>
      )
    } else {
      return (
        <Card raised={true}>
          <Image src={props.pet.picture} size="huge"/>
          <Card.Content>
            <Card.Header>
              {props.pet.name}
            </Card.Header>
            <Card.Meta>
              <span className="age">
                Age: {props.pet.age}
              </span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="home" />
              {props.pet.shelter}
            </a>
            <div>
            <Button secondary onClick={props.noPet}>Next</Button>
            <Button color="purple" onClick={props.showDetail}>Bio</Button>
            <Button
              color="green"
              content="Adopt"
              icon="heart" onClick={props.yesPet}
            />
          </div>
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

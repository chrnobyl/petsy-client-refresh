import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button, Segment, Dimmer, Loader } from 'semantic-ui-react'
// import PetDetail from './PetDetail'

const DisplayPet = (props) => {

  function returnPet(props) {

    if (props.pet === undefined) {
      return (
        <div>
          <h3>No pets found. Update your filter settings to see more pets.</h3>
          <Image src="https://wbo2hhkgdnexdedu-zippykid.netdna-ssl.com/wp-content/uploads/2014/04/duck-hunt.gif" size="huge"/>
        </div>
      )
    } else if (props.detail === true){
      return (
        <Card fluid centered raised color="red">
          <Image src={props.pet.picture} size="huge"/>
          <Card.Content>
            <Card.Header size="massive" color="green">
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
              <Button.Group>
                <Button size="big" secondary onClick={props.noPet}>Skip</Button>
                <Button size="big" color="purple" onClick={props.showDetail}>Bio</Button>
                <Button
                  size="big"
                  color="green"
                  content="Adopt"
                  icon="heart" onClick={props.yesPet}
                />
              </Button.Group>
          </div>
          </Card.Content>
          <Card.Content extra>
            <p>{props.pet.description}</p>
          </Card.Content>
        </Card>
      )
    } else {
      return (
        <Card fluid centered raised>
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
              <Button.Group>
                <Button size="big" secondary onClick={props.noPet}>Skip</Button>
                <Button size="big" color="purple" onClick={props.showDetail}>Bio</Button>
                <Button
                  size="big"
                  color="green"
                  content="Adopt"
                  icon="heart" onClick={props.yesPet}
                />
              </Button.Group>
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

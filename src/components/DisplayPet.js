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
          <Image src={props.pet.picture} fluid />
          <Card.Content>
            <Card.Header size="large" color="green">
              <h2>{props.pet.name}</h2>
            </Card.Header>
            <Card.Meta>
              <span className="age"><h3>
                Age: {props.pet.age}
              </h3></span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href={`mailto:${props.pet.email}`}>
              <h3><Icon name="home" size="big"/>
              {props.pet.shelter}</h3>
            </a>
            <div>
              <Button.Group>
                <Button size="large" secondary onClick={props.noPet}>Skip</Button>
                <Button size="large" color="purple" onClick={props.showDetail}>Bio</Button>
                <Button
                  size="large"
                  color="green"
                  content="Adopt"
                  icon="heart" onClick={props.yesPet}
                />
              </Button.Group>
          </div>
          </Card.Content>
          <Card.Content extra>
            <h2><p>{props.pet.description}</p></h2>
          </Card.Content>
        </Card>
      )
    } else {
      return (
        <Card fluid centered raised>
          <Image src={props.pet.picture} fluid />
          <Card.Content>
            <Card.Header size="massive">
              <h2>{props.pet.name}</h2>
            </Card.Header>
            <Card.Meta>
              <span className="age"><h3>
                Age: {props.pet.age}
              </h3></span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a>
              <h3><Icon name="home" size="big"/>
              {props.pet.shelter}</h3>
            </a>
            <div>
              <Button.Group>
                <Button size="large" secondary onClick={props.noPet}>Skip</Button>
                <Button size="large" color="purple" onClick={props.showDetail}>Bio</Button>
                <Button
                  size="large"
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

import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import Pet from './Pet'

const DisplayPet = (props) => {

  function returnPet(props) {
    if (props.pet === undefined) {
      return (
        <h3>loading pet...</h3>
      )
    } else {
      return (
        // <Pet id={props.pet.id} name={props.pet.name} age={props.pet.age} picture={props.pet.picture}/>
        <Card>
          <Image src={props.pet.picture} />
          <Card.Content>
            <Card.Header>
              {props.pet.name}
            </Card.Header>
            <Card.Meta>
              <span className='age'>
                Age {props.pet.age}
              </span>
            </Card.Meta>
            <Card.Description>
              {props.pet.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              North Shore Animal League
            </a>
            <Button secondary onClick={props.noPet}>Next</Button>
            <Button
              color='green'
              content='Adopt'
              icon='heart' onClick={props.yesPet}
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

import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
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
        <Card className="center">
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
          </Card.Content>
          <button className="btn btn-success btn-lg btn-block" onClick={props.yesPet}>yes</button>
          <button className="btn btn-danger btn-lg btn-block" onClick={props.noPet}>no</button>
        </Card>
      )
    }
  }

  return (
    <div>
      {returnPet(props)}
    </div>
  )
}

export default DisplayPet

import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import '../App.css';

const PetDetail = (props) => {
  return (
    <div className="center">
      <Segment>
        <div><h3>{props.pet.name}, Age {props.pet.age}</h3></div>
        <div className="pics"><img src={props.pet.picture} /></div>
        <div className="pics">{props.pet.description}</div>
        <Button onClick={() => props.deleteUserPet(props.pet.id)}>Remove pet from list</Button>
      </Segment>
    </div>
  )
}

export default PetDetail

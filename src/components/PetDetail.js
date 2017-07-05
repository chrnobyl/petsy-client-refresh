import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import '../App.css';

const PetDetail = (props) => {
  debugger
  return (
    <div className="center">
      <Segment>
        <div>id: {props.pet.id} Name: {props.pet.name}, Age: {props.pet.age}</div>
        <div className="pics"><img src={props.pet.picture} /></div>
        <div className="pics">{props.pet.description}</div>
      </Segment>
    </div>
  )
}

export default PetDetail

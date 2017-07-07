import React, { Component } from 'react'
import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import '../App.css';

const PetDetail = (props) => {
  return (

      <Modal trigger={<Button className="button" />}>
        <Modal.Content>
        <div><h3>{props.pet.name}, Age {props.pet.age}</h3></div>
        <div className="pics"><img src={props.pet.picture} /></div>
        <div className="pics">{props.pet.description}</div>
        <Button onClick={() => props.deleteUserPet(props.pet.id)}>Remove pet from list</Button>
        </Modal.Content>
      </Modal>

  )
}

export default PetDetail

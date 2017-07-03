import React, { Component } from 'react'
import PetDetail from './PetDetail'
import '../App.css';


export default function PetList(props) {
  return (
    <div>
      <h1>Pets:</h1>
      <ul>
        {props.pets.map((pet, i) => (
            <li key={i}><PetDetail key={i} id={pet.id} name={pet.name} age={pet.age} picture={pet.picture}/>{pet.id}</li>
            )
          )}
      </ul>
    </div>
  )
}

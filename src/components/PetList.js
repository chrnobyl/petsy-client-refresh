import React, { Component } from 'react'
import Pet from './Pet'
import '../App.css';


export default function PetList(props) {
  return (
    <div>
      <h1>Pets:</h1>
      <ul>
        {props.pets.map((pet, i) => (
            <li key={i}><Pet key={i} id={pet.id} name={pet.name} age={pet.age} picture={pet.picture}/>{pet.id}</li>
            )
          )}
      </ul>
    </div>
  )
}

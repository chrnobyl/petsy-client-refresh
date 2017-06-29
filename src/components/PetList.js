import React, { Component } from 'react'
import Pet from './Pet'

export default function PetList(props) {
  return (
    <div>
      <h1>Pets:</h1>
      {props.pets.map((pet, i) => (
          <div><Pet key={i} name={pet.name} age={pet.age} picture={pet.picture}/>{pet.id}</div>
          )
        )}
    </div>
  )
}

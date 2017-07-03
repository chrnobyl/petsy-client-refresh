import React, { Component } from 'react'
import '../App.css';

const Pet = (props) => {
  return (
    <div>
      <div>id: {props.id} Name: {props.name}, Age: {props.age}</div>
      <div className="pics"><img src={props.picture} /></div>
    </div>
  )
}

export default Pet

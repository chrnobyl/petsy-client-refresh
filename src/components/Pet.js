import React, { Component } from 'react'

export default class Pet extends Component {
  constructor(props){
    super(props)
  }



  render(){
    return (
      <div>
        <div>id: {this.props.id} Name: {this.props.name}, Age: {this.props.age}</div>
        <div><img src={this.props.picture}/></div>

      </div>
    )
  }

}

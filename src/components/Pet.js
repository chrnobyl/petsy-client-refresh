import React, { Component } from 'react'

export default class Pet extends Component {
  render(){
    return (
      <div>
        <div>{this.props.name}, Age: {this.props.age}</div>
        <div><img src={this.props.picture} /></div>

      </div>
    )
  }

}

import React, { Component } from 'react'
import { Menu, Segment, Popup, Button } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'Wag!' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment className="largetext" inverted>
          <h1>Wag!</h1>
      </Segment>

    )
  }
}

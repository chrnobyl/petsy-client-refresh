import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={ Link } to={'/users/1'} name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
          <Menu.Item name='pets' active={activeItem === 'pets'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}

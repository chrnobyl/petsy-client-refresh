import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment, Popup, Button } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'Petsy!' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted size="massive" widths="16">
          <Popup
            trigger={<Button size="massive" fluid="true" color="black" content='Welcome to Petsy' />}
            content={<Button size="massive" fluid="true"
               content={<Button size="massive" fluid="true" color='green' content='Woof' onClick={() => console.log("meow")}/>} />}
            on='click'
            position='top right'
          />
        </Menu>
      </Segment>
    )
  }
}

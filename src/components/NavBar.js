import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment, Popup, Button } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'Wag!' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment className="largetext" inverted>
        <Menu inverted size="massive" widths="16">
          <Popup inverted
            trigger={<Button className="largetext" size="massive" fluid="true" color="black" content='Wag!' />}
            content={<Button size="massive" fluid="true"
               content={<Button size="massive" fluid="true" content='Woof' onClick={() => console.log("meow")}/>} />}
            on='click'
            position='top right'
          />
        </Menu>
      </Segment>
    )
  }
}

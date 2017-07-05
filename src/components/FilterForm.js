import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react'

export default class FilterForm extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
        <div>
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Preferences</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>Enter your preferences to find the pet that's right for you.</p>
                <p></p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Cancel
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content="Save preferences" onClick={this.close} />
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
  }
        //   <h3>Pet Filter</h3>
        //   <form onSubmit={console.log("submitted")}>
        //     {/* <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} /><br/>
        //     <input type="date" name="expiration_date" placeholder="Expiration date" value={this.state.expiration_date} onChange={this.handleChange} /><br/>
        //     <input type="number" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange}  /><br/> */}
        //
        //     <select name="category" value={props.selected}>
        //       <option value="1">Male</option>
        //       <option value="2">Female</option>
        //       <option value="3">Dog</option>
        //       <option value="4">Cat</option>
        //     </select>
        //
        //     <input type="submit" value="Submit" />
        //   </form>
        // </div>

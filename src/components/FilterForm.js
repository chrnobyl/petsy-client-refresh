import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react'

const sexes = [
  { key: 'm', text: 'Male', value: 'M' },
  { key: 'f', text: 'Female', value: 'F' },
]

const species = [
  { key: 'c', text: 'Cat', value: 'cat'},
  { key: 'd', text: 'Dog', value: 'dog'}
]

const sizes = [
  { key: 's', text: 'Small', value: 'S'},
  { key: 'm', text: 'Medium', value: 'M'},
  { key: 'l', text: 'Large', value: 'L'}
]

const ages = [
  { key: 'b', text: 'Baby', value: 'Baby'},
  { key: 'y', text: 'Young', value: 'Young'},
  { key: 'a', text: 'Adult', value: 'Adult'}
]

export default class FilterForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      species: "",
      sex: "",
      city: "",
      age: "",
      size: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

    handleChange(event, result) {
      this.setState({
        [result.placeholder]: result.value
      })
    }

    handleSubmit(event) {
      event.preventDefault()
      this.props.applyFilter(this.state)
    }

    render(){
      let cities = this.props.shelters.map((shelter, i) => {
        return { key: i, text: shelter.city, value: shelter.city }
      })

      return (
        <Modal size='fullscreen' trigger={<Button>Show User Preferences</Button>}>
          <Modal.Header>Filter pets by:</Modal.Header>
          <Modal.Content>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Select label='Species' options={species} placeholder='species' onChange={this.handleChange} />
                <Form.Select label='Sex' options={sexes} placeholder='sex' onChange={this.handleChange} />
                <Form.Select label='City' options={cities} placeholder='city' onChange={this.handleChange} />
                <Form.Select label='Size' options={sizes} placeholder='size' onChange={this.handleChange} />
                <Form.Select label='Age' options={ages} placeholder='age' onChange={this.handleChange} />
                {/* <Form.Field>
                  <Checkbox label='Small' onChange={this.handleChange}/>
                  <Checkbox label='Medium' onChange={this.handleChange}/>
                  <Checkbox label='Large' onChange={this.handleChange}/>
                </Form.Field> */}
              </Form.Group>

              <Form.Button>Submit</Form.Button>
            </Form>
          </Modal.Content>
        </Modal>
      )
    }
  }

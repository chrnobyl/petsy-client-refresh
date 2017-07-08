import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react'

const sexes = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const species = [
  { key: 'c', text: 'Cat', value: 'cat'},
  { key: 'd', text: 'Dog', value: 'dog'}
]

const FilterForm = (props) => {
  let cities = props.shelters.map((shelter, i) => {
    return { key: i, text: shelter.city, value: shelter.city }
  })

  function handleSubmit(event) {
    event.preventDefault()
    props.applyFilter(event.target.children)
  }

  return (
    <Modal trigger={<Button>Show User Preferences</Button>}>
      <Modal.Header>Filter pets by:</Modal.Header>
      <Modal.Content>
        <Form size='big' onSubmit={handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Select label='Species' options={species} placeholder='Species' />
            <Form.Select label='Sex' options={sexes} placeholder='Sex' />
            <Form.Select label='City' options={cities} placeholder='City' />
            <Form.Field>
              <Checkbox label='Small' />
              <Checkbox label='Medium' />
              <Checkbox label='Large' />
            </Form.Field>
          </Form.Group>

          <Form.Button>Submit</Form.Button>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default FilterForm

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
  debugger
  let cities = props.shelters.map((shelter, i) => {
    return { key: i, text: shelter.city, value: shelter.city }
  })

  return (
    <Modal trigger={<Button>Show User Preferences</Button>}>
      <Modal.Header>Filter pets by:</Modal.Header>
      <Modal.Content image>
        <Form size='big'>
          <Form.Group widths='equal'>
            <Form.Select label='Species' options={species} placeholder='Species' />
            <Form.Select label='Sex' options={sexes} placeholder='Sex' />
            <Form.Select label='City' options={cities} placeholder='City' />
            <Form.Field>
                  <Checkbox label='Small' />
                  <Checkbox label='Medium' />
                  <Checkbox label='Large' />
            </Form.Field>
            <Form.Field label='Zip code' control='input' placeholder='Zip code' />
          </Form.Group>

          <Form.Button>Submit</Form.Button>
        </Form>
      </Modal.Content>
    </Modal>
  )
}
export default FilterForm
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

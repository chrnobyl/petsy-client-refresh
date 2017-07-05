import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const FilterForm = (props) => (
  <Modal trigger={<Button>Show User Preferences</Button>}>
    <Modal.Header>Filter pets by:</Modal.Header>
    <Modal.Content image>
      <form onSubmit={console.log("submitted")}>
        <select name="category" value={props.selected}>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Dog</option>
          <option value="4">Cat</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </Modal.Content>
  </Modal>
)

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

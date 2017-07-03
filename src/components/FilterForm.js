import React, { Component } from 'react'

const Form = (props) => {
  return(
      <div>
        <h3>Pet Filter</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} /><br/>
          <input type="date" name="expiration_date" placeholder="Expiration date" value={this.state.expiration_date} onChange={this.handleChange} /><br/>
          <input type="number" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange}  /><br/>

          <select name="category" value={this.state.category}>
            <option value="1">Meat</option>
            <option value="2">Produce</option>
            <option value="3">Baked</option>
            <option value="4">Dairy</option>
            <option value="5">Baked</option>
            <option value="6">Freezer</option>
            <option value="7">Beverage</option>
            <option value="8">Other</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

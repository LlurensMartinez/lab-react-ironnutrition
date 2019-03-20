import React, { Component } from 'react';



class Button extends Component {
  
  state = {
    name: "name",
    calories: "calories",
    image: "image",
    quantity: "quantity"
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {add} = this.props;
    add(this.state.name, this.state.calories, this.state.image, this.state.quantity);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
          <input 
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
          />

          <input 
          type="text"
          name="calories"
          value={this.state.calories}
          onChange={this.handleInput}
          />

          <input 
          type="text"
          name="image"
          value={this.state.image}
          onChange={this.handleInput}
          />  

          <input 
          type="text"
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleInput}
          />    
          <button type="submit">Add</button>
          </form>
    );
  }
}

export default Button;
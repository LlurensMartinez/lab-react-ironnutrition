import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox'
import Button from './components/Button'




class App extends Component {

  state = {
    arrayFood : foods
  }

  renderList(){
    return this.state.arrayFood.map((food, index) => {
      return <FoodBox 
                  key={`id-${index}`} 
                  name={food.name} 
                  calories={food.calories} 
                  image={food.image}
                  quantity={food.quantity}
                  index={index}
                  />
    })
  }

  add = (name,calories,image,quantity) => {
  const newContact = {
    "name":name,
    "calories":calories,
    "image": image,
    "quantity": quantity
  }
  this.setState({
    arrayFood:[...this.state.arrayFood, newContact] //push devuelve longitud por eso lohacemos asi parea que devuelve un array 
  })
}

  render() {
    return (
      <div>
        <Button 
        add={this.add}/>
        {this.renderList()}
      </div>
    );
  }
}

export default App;

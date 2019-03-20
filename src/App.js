import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox'




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
  
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default App;

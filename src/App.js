import React, { Component } from 'react';
import './App.css';
import foods from './data/foods.json'
import FoodBox from './components/FoodBox'
import Button from './components/Button'
import SearchBar from './components/SearchBar'




const FOOD = foods;

class App extends Component {

  state = {
    arrayFood : foods
  }

  renderList =()=> {
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
   updateSearch = (searchData)  => {
     let filtered;
     searchData !== '' ?  
        filtered = FOOD.filter((foods) => {
          return foods.name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1;
        }) : 
        filtered = FOOD;
    this.setState({
      arrayFood : filtered
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
    console.log(this.state.arrayFood);
    return (
      <div>
        <SearchBar 
        searchData={this.updateSearch}
        />
        <Button 
        add={this.add}/>
        {this.renderList()}
      </div>
    );
  }
}

export default App;

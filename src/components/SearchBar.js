import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    search:""
  }

  handleInput = async (event) => {
    
    await this.setState({
      // recoge valor introducido
      search: event.target.value
    })
    // Pasara funcion en app.js para recoger el valor de state.search
    this.props.searchData(this.state.search)
  }
  render() {
    return (
      <form>
       <input
        value={this.state.search}
         placeholder="Search for..."
         type="search"
         name="search"
         onChange={this.handleInput}
       />
     </form>
    );
  }
}

export default SearchBar;
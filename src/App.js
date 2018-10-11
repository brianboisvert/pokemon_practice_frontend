import React, { Component } from 'react';
import './App.css'
import AllPokemon from './containers/allPokemon';
import Search from './containers/search';
import BeginButton from './components/beginButton';

class App extends Component {

  state = {
    allPokemon: [],
    showPokemon: false,
    types: [],
    selectedTypes: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/all_pokemons/')
      .then(res => res.json())
      .then(data => this.setState({
        allPokemon: data
      })
    );
  }

  showPokemon() {
    this.setState({
      showPokemon: this.state.showPokemon ? false : true
    })
  }

  findTypes(types) {
    this.setState({
      types: [...this.state.types, types]
    })
  }

  selectedTypes(types) {
    this.setState({
      selectedTypes: types
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <img className="logo" src="/logo.png" alt="pokemon logo" />
          <BeginButton showPokemon={this.showPokemon.bind(this)} />
          {this.state.showPokemon ? <Search allPokemon={this.state.allPokemon} types={this.state.types} selectedTypes={this.state.selectedTypes} /> : null }
        </div>
        {this.state.showPokemon ? <AllPokemon allPokemon={this.state.allPokemon} findTypes={this.findTypes.bind(this)} /> : null }
      </div>
    );
  }
}

export default App;

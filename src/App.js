import React, { Component } from 'react';
import './App.css'
import AllPokemon from './containers/allPokemon';
import Search from './components/search';
import BeginButton from './components/beginButton';

class App extends Component {

  state = {
    allPokemon: [],
    showPokemon: false,
    types: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/all_pokemons/')
      .then(res => res.json())
      .then(data => this.setState({
        allPokemon: data
      })
      // .then(console.log("hit"))
      // .then(data => data.results.map((poke) => {
      //   this.setState({
      //     individualEndpoints: [...individualEndpoints, poke["url"]]
      //   })
      // }))
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

  render() {
console.log(this.state);
    return (

      <div>
        <div className="header">
          <img className="logo" src="/logo.png" />
          <BeginButton showPokemon={this.showPokemon.bind(this)} />
          {this.state.showPokemon ? <Search allPokemon={this.state.allPokemon} /> : null }
        </div>
        {this.state.showPokemon ? <AllPokemon allPokemon={this.state.allPokemon} findTypes={this.findTypes.bind(this)} /> : null }
      </div>
    );
  }
}

export default App;

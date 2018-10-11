import React, { Component } from 'react';
import './App.css'
import AllPokemon from './containers/allPokemon';
import Search from './components/search';
import BeginButton from './components/beginButton';

class App extends Component {

  state = {
    showPokemon: false
  }

  showPokemon() {
    this.setState({
      showPokemon: this.state.showPokemon ? false : true
    })
  }

  render() {

    return (

      <div>
        <div className="header">
          <img className="logo" src="/logo.png" />
          <BeginButton showPokemon={this.showPokemon.bind(this)} />
          {this.state.showPokemon ? <Search /> : null}
        </div>
        {this.state.showPokemon ? <AllPokemon /> : null }
      </div>
    );
  }
}

export default App;

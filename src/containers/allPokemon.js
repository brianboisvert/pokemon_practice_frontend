import React from 'react';
import Individual from './individual';

class AllPokemon extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/all_pokemons/')
      .then(res => res.json())
      .then(data => this.setState(data));
  }

  render() {
    const individual = this.state && this.state.results ? this.state.results.map((poke, i) => {
      return (<Individual poke={poke} key={i} />)
    }) : undefined

    return (
      <div>
        <div>
          {individual}
        </div>
      </div>
    )
  }
}

export default AllPokemon;

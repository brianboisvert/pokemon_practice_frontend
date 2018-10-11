import React from 'react';
import Individual from './individual';

class AllPokemon extends React.Component {

  render() {
    const individual = this.props.allPokemon.results.slice(0, 50).map((poke, i) => {
      return (<Individual poke={poke} key={i} findTypes={this.props.findTypes} />)
    })

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

import React from 'react';

class Individual extends React.Component {
  state = {
    name: '',
    image: '',
    type: []
  }

  componentDidMount() {
    fetch(this.props.poke.url)
      .then(res => res.json())
      .then(data => this.setState({
        name: data.name,
        image: data.sprites["front_default"],
        type: data.types
      }, () => {
        this.props.findTypes(data.types)
      })
    );
  }


  render() {
    return (
      <div>
        <img src={this.state.image} />
      </div>
    )
  }
}

export default Individual;

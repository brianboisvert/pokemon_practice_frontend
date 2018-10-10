import React from 'react';

class Individual extends React.Component {
  state = {
    name: '',
    image: ''
  }

  componentDidMount() {
    fetch(this.props.poke.url)
      .then(res => res.json())
      .then(data => this.setState({
        name: data.name,
        image: data.sprites
      })
    );
  }

  render() {
   console.log(this.state);
    return (
      <div>

      </div>
    )
  }
}

export default Individual;

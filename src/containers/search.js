import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class Search extends React.Component {

  state = {
    selectedTypes: []
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(event.target.value)
    // this.props
  }

  handleChange(value) {
      // console.log(value[0]);
    this.setState({
      selectedTypes: value.map(type => type["value"])
    })
  }

  render() {
console.log(this.state);
    const pokeTypes = this.props.types.flat(2).map(type => type["type"]["name"]).sort()
    let uniqueTypes = [...new Set(pokeTypes)]
    let options = uniqueTypes.map((type) => {
      return ({ value: type, label: type });
    })

    return(
      <form onSubmit={this.onSubmit}>
        <Select
          options={options}
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          onChange={this.handleChange.bind(this)}
         />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Search;

import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

class Search extends React.Component {

  state = {
    selectedTypes: []
  }


  onSubmit(event) {
    event.preventDefault();
    // console.log(this.state.selectedTypes);
    this.props.selectedTypes(this.state.selectedTypes);
  }

  handleChange(value) {
    this.setState({
      selectedTypes: value.map(type => type["value"])
    })
  }

  render() {
    const pokeTypes = this.props.types.flat(2).map(type => type["type"]["name"]).sort()
    let uniqueTypes = [...new Set(pokeTypes)]
    let options = uniqueTypes.map((type) => {
      return ({ value: type, label: type });
    })

    return(
      <form onSubmit={this.onSubmit.bind(this)}>
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

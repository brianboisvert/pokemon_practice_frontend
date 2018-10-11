import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

const Search = (props) => {

  const pokeTypes = props.types.flat(2).map(type => type["type"]["name"]).sort()
  let uniqueTypes = [...new Set(pokeTypes)]
  let options = uniqueTypes.map((type) => {
    return { value: type, label: type };
  })

  return(
    <div>
      <Select
        options={options}
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
       />
    </div>
  )
}

export default Search;

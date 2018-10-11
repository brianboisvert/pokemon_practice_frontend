import React from 'react';

const BeginButton = (props) => {

  let handleClick = (event) => {
    props.showPokemon();
  }

  return(
    <div>
      <button onClick={handleClick}>Want to be the very best?</button>
    </div>
  )
}

export default BeginButton;

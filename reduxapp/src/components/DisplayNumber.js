import React from 'react';

function DisplayNumber(props){
   
  

    return(
      <div>
        <h1>Display Number</h1>
        <input readOnly type="text" value = {props.number}></input>
      </div>
    );
  }

  export default DisplayNumber;
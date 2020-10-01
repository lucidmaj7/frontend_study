import React, { useState } from 'react';
import store from '../store';
function DisplayNumber(props){
    let [number, setNumber] = useState(store.getState().number);
    store.subscribe(
        ()=>setNumber(Number(store.getState().number))
    );

    return(
      <div>
        <h1>Display Number</h1>
       
        <input readOnly="true" type="text" value = {number}></input>
      </div>
    );
  }

  export default DisplayNumber;
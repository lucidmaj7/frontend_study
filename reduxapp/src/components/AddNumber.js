import React, { useState } from 'react';
import store from '../store';

function AddNumber(props){
    let [addSize, setAddSize] = useState(1);
    return(
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={(e)=>{
     
          store.dispatch({type:"INCREMENT", size: addSize});
          }}></input>
        <input type="text" value = {addSize} onChange={(e)=>setAddSize(Number(e.target.value))} ></input>
      </div>
    );
  }

  export default AddNumber;
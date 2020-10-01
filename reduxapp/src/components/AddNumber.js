import React, { useState } from 'react';


function AddNumber(props){
    let [addSize, setAddSize] = useState(1);
    return(
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={(e)=>{
          e.preventDefault();
          props.onAddNumber(addSize);
          }}></input>
        <input type="text" value = {addSize} onChange={(e)=>setAddSize(e.target.value)} ></input>
      </div>
    );
  }

  export default AddNumber;
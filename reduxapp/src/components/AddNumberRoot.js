import React from 'react';
import AddNumber from '../components/AddNumber';
function AddNumberRoot(props){
    return(
      <div>
        <h1>Add Number Root</h1>
        <AddNumber onAddNumber={props.onAddNumber}></AddNumber>
      </div>
    );
  }

  export default AddNumberRoot;
  
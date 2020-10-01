//import { render } from '@testing-library/react';
import React,{useState} from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';
import './App.css';



function App() {
  let [number,setNumber] = useState(3);
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot onAddNumber={(num)=>{
        setNumber(Number(number)+Number(num));
      }}></AddNumberRoot>
      <DisplayNumberRoot number={number}></DisplayNumberRoot>
    </div>
  );
}

export default App;

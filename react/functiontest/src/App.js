import React, { useState,useEffect } from 'react';

import './App.css';

function App() {
  let [onFuncComp,setFuncComp] = useState(true);
  let fucnComp="";
 
  return ( 
    <div className="container">
      <h1>Hello world</h1>
      <input type="button" value={onFuncComp} onClick={()=>{onFuncComp? setFuncComp(false) : setFuncComp(true)}}></input>
      {onFuncComp ? <FuncComp initNumber={Math.random()}></FuncComp> : null}
     
      <ClassComp initNumber={Math.random()}></ClassComp>
    </div>
  );
}
var funcId = 0;
function FuncComp(props){
 
  let dateState = useState((new Date()).toString());
  let [number, setNumber] =  useState(props.initNumber);
  

  useEffect(function(){
    console.log("func=>useEffect didmount"+ (++funcId));
    return (()=>{
      console.log("func=>useEffect unmount"+ (++funcId));
    });
  },[]);

  console.log("func=>render"+ (++funcId));
  return(
    <div className ="container">
      <h2>Function Style Component</h2>
      <p>Number: {number}</p>
      <p>Date: {dateState[0]}</p>
      <input type="button" value="random" onClick={function(){
        setNumber(Math.random());
      }}></input>
      <input type="button" value="date" onClick={function(){
           dateState[1]((new Date()).toString());
      }}></input>
      
    </div>
  );
}

class ClassComp extends React.Component{
  state={
    number:this.props.initNumber,
    date:(new Date()).toString()
  }
  componentWillMount(){
    console.log("%cClassComp::componentWillMount","color:red");
    return;
    
  }
  componentDidMount(){
    console.log("%cClassComp::componentDidMount","color:red");
  }
  render(){
    console.log("%cClassComp::render","color:red");
    return(
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="random" onClick={()=>{
          this.setState({number:Math.random()});
        }}></input>

        <input type="button" value="date" onClick={()=>{
          this.setState({date:(new Date()).toString()});
        }}></input>
      </div>
    );
  }
  
}

export default App;
 
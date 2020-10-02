import React, { useState } from 'react';
import DisplayNumber from '../components/DisplayNumber';
import store from '../store'

export default ()=>{
    let [number,setNumber] = useState(Number(store.getState().number));
    store.subscribe(
        ()=>setNumber(Number(store.getState().number))
    );
    return(
        <DisplayNumber num={number} ></DisplayNumber>
    );

}
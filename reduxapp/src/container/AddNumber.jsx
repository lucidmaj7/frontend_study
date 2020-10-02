import React from 'react';
import store from '../store';
import AddNumber from '../components/AddNumber';

export default ()=>{
   
    return(<AddNumber
        onClick={(addSize)=>{
            store.dispatch({type:"INCREMENT", size: addSize});
        }}
    ></AddNumber>);
};
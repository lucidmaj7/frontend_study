import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return {
        number:state.number
    }
}
const mapDispatchToProps = {

}
export default connect(mapStateToProps,mapDispatchToProps)(DisplayNumber);


/*
import React, { useState } from 'react';

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
*/


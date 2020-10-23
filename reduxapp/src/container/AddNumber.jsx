import AddNumber from '../components/AddNumber';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
    return {
        onClick:(size)=>dispatch({type:'INCREMENT', size:size})
    }
    
};

export default connect(null, mapDispatchToProps)(AddNumber);

/*

export default ()=>{
   
    return(<AddNumber
        onClick={(addSize)=>{
            store.dispatch({type:"INCREMENT", size: addSize});
        }}
    ></AddNumber>);
};

*/
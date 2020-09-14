import React from 'react';


class TodoInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {todoValue : ''};
    }
   
    render(){
        return (
            <div className="todo-input-wrap">
                <form onSubmit={(e)=>{ 
                    e.preventDefault();
                    this.props.onSubmit(this.state.todoValue);
                    this.setState({todoValue:""});
                }}
                    >
                    <label >Add To do: </label>
                    <input onChange={(e )=>{
                        this.setState({todoValue: e.target.value});
                        
                    }} type='text' value={this.state.todoValue}></input>
                   
                    <input  type='submit' value="추가"></input>
                </form>
               
            </div>
        );
    }
}

export default TodoInput;
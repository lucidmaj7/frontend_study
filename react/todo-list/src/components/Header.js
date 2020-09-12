import React from 'react';
import TodoInput from './TodoInput';

class Header extends React.Component{

    render(){
        return(
        <header>
            <h1>To do List</h1>
            <TodoInput onSubmit={this.props.addTodo}></TodoInput>
        </header>
        );
    }
}

export default Header;
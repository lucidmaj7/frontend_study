import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{

    constructor(props){
        super(props);

    }
    
    render(){
        let list = [];
        for(let i =0 ;i< this.props.data.length;i++)
        {
            list.push(<li key={i}><TodoItem 
                
                onDelete= {this.props.onDelete}
                todoTitle={this.props.data[i].title}
                todoId= {this.props.data[i].id}
                todoState = { this.props.data[i].status}
                ></TodoItem></li>);
        }

        return (
            <div className="todo-list-wrap">
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default TodoList;
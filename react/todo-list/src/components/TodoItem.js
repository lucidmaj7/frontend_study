import React from 'react';
import TodoAction from './TodoAction';


class TodoItem extends React.Component{
    render(){
        let todoclassName="";
        if(this.props.todoStatus ===1)
        {
            todoclassName = "todo-finish-title";
        }
        return(
            <div className="todo-item-wrap" data-todo-id={this.props.todoId}>
                <p className={todoclassName}>{`${this.props.todoTitle}`}</p>
                <TodoAction todoId={this.props.todoId} onDelete={this.props.onDelete} onFinish={this.props.onFinish}></TodoAction>
            </div>
        );
    }
}

export default TodoItem;
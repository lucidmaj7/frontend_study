import React from 'react';
import TodoAction from './TodoAction';


class TodoItem extends React.Component{
    render(){
        return(
            <div className="todo-item-wrap" data-todo-id={this.props.todoId}>
                <p>{`${this.props.todoTitle}  ${this.props.todoStatus}`}</p>
                <TodoAction todoId={this.props.todoId} onDelete={this.props.onDelete} onFinish={this.props.onFinish}></TodoAction>
            </div>
        );
    }
}

export default TodoItem;
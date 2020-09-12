import React from 'react';

class TodoAction extends React.Component{
    render(){
        return(
            <div className="todo-action-wrap">
                <ul>
                    <li><a href="" onClick={(e)=>{
                        e.preventDefault();
                        this.props.onDelete(this.props.todoId);
                    }}>완료</a></li>
                    <li><a 
                    onClick={(e)=>{
                        e.preventDefault();
                        this.props.onDelete(this.props.todoId);
                    }}
                    href="">삭제</a></li>
                </ul>
            </div>
        );
    }
}

export default TodoAction;
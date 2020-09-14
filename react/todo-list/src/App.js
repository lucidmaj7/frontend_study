import React from 'react';

import "./App.css";
import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.onTodoDelete = this.onTodoDelete.bind(this);
    this.onTodoFinish = this.onTodoFinish.bind(this);
    this.state = {
      todoList :[]
    };
  }
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  onTodoDelete(id){
    //alert("Delete!"+id);
    let newTodo = [];
    for(let i = 0 ;i<this.state.todoList.length;i++)
    {
   
      if(this.state.todoList[i].id != id)
      {
          newTodo.push(this.state.todoList[i]);
      }
    }
    this.setState({todoList:newTodo});


  }
  onTodoFinish(id)
  {
    let newTodo = [];
    for(let i = 0 ;i<this.state.todoList.length;i++)
    {
      let item = this.state.todoList[i];
      if(item.id == id)
      {
        item.status = 1;
      }
      newTodo.push(item);
    }
    this.setState({todoList:newTodo});

  }
  render(){
  return (

      <div className="App">
        <div className="todo-container">
        <Header addTodo={(todoValue)=>{
        //  alert(todo);
          let todo ={id:this.uuidv4(),
                    title: todoValue,
                    status: '0'
                   };
    
          this.setState({todoList:[...this.state.todoList,todo]});
        }}></Header>
        <TodoList 
          data={this.state.todoList} 
          onDelete={this.onTodoDelete}
          onFinish={this.onTodoFinish}
          
          ></TodoList>
          </div>
      </div>
  );
  }
}

export default App;

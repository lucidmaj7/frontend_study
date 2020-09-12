import React from 'react';

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

    

  }
  onTodoFinish(id)
  {
    alert("onTodoFinish");
  }
  render(){
  return (

      <div className="App">
        <Header addTodo={(todoValue)=>{
        //  alert(todo);
          let todo ={id:this.uuidv4(),
                    title: todoValue,
                    state: '0'
                   };
          //let list = this.state.todoList.push({id: this.state.todoList.length});
          //this.setState({todoList:list});
          this.setState({todoList:[...this.state.todoList,todo]});
        }}></Header>
        <TodoList 
          data={this.state.todoList} 
          onDelete={this.onTodoDelete}
          onFinish={this.onTodoFinish}
          
          ></TodoList>
      </div>
  );
  }
}

export default App;

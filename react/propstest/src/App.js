import React from 'react';

import './App.css';
import MyHeader from './components/header';
import Contents from './components/contents';

class  App extends React.Component {
  constructor(props)
  {
      super(props);
      this.state ={
          subject : {title:'My Header!!', subtitle:"subtitle!!",desc:"hello World!!"},
          contents:[
            {id: 1, title:'HTML', desc:"html is for information"},
            {id: 2, title:'JAVA', desc:"JAVA is for information"},
            {id: 3, title:'PYTHON', desc:"PYTHON is for information"},
            {id: 4, title:'JAVASCRIPT', desc:"JAVASCRIPT is for information"},
            {id: 5, title:'C++', desc:"C++ is for information"},
          ]
      };
  
  }
  render(){
  return (
    <div className="App">
      <MyHeader 
          title={this.state.subject.title}
          subtitle={this.state.subject.subtitle}
          desc={this.state.subject.desc}
      />
      <Contents data={this.state.contents} />
    </div>
  );
  }
}

export default App;

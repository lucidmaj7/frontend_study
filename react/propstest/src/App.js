import React from 'react';

import './App.css';
import MyHeader from './components/header';
import Contents from './components/contents';

class  App extends React.Component {
  constructor(props)
  {
      super(props);
      this.state ={
          mode: 'read',
          selected_content_id:2,
          subject : {title:'My Header!!', subtitle:"subtitle!!",desc:"hello World!!"},
          welcome:{title:"Welcome", desc: "Hello , React!!!!!"},
          contents:[
            {id: 0, title:'HTML', desc:"html is for information"},
            {id: 1, title:'JAVA', desc:"JAVA is for information"},
            {id: 2, title:'PYTHON', desc:"PYTHON is for information"},
            {id: 3, title:'JAVASCRIPT', desc:"JAVASCRIPT is for information"},
            {id: 4, title:'C++', desc:"C++ is for information"},
          ]
      };
  
  }
  render(){
    let _title = null;
    let _desc = null;
    if(this.state.mode === 'Welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if (this.state.mode === 'read')
    {
      let selected = this.state.selected_content_id;
      _title = this.state.contents[selected].title;
      _desc = this.state.contents[selected].desc;
    }
  return (
    <div className="App">
    
      <MyHeader 
          tolink={"#"}
          clickEvent={(e)=>{
           e.preventDefault();
           this.setState(
             {mode: "Welcome"});
          }}
          title={this.state.subject.title}
          subtitle={this.state.subject.subtitle}
          desc={this.state.subject.desc}
      />

      <hr />
      <Contents title={_title} desc={_desc} data={this.state.contents} dataselect={(e)=>{
          e.preventDefault();
          this.setState(
            {mode:  'read' });
          this.setState({selected_content_id: e.target.dataset.id });

      }} />
    </div>
  );
  }
}

export default App;

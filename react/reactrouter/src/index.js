import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route,Switch,Link,NavLink,HashRouter, useParams} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

const contents = [
  {id: 1, title:"HTML", desc:"HTML is..."},
  {id: 2, title:"JS", desc :"JS IS.."},
  {id: 3, title:"REACT", desc :"REACT IS.."},
  {id: 4, title:"C++", desc :"CPP IS.."},

];

function Topics(){
  let list =[];

  for(let i = 0 ;i<contents.length;i++)
  {
    list.push(
      <li key={i}><NavLink to={`/topics/${contents[i].id}`}>{`${contents[i].title}`}</NavLink></li>
    );
  }
  
  let routeList = [];
  for(let i = 0 ;i<contents.length;i++)
  {
    routeList.push(
       <Route path={`/topics/${contents[i].id}`}>
            {`${contents[i].desc}`}
        </Route>  
    );
  }
  

  return(
    <div>
      <h2>Topics</h2>
      <ul>
         {list}
      </ul>
      <Route path="/topics/:id">
        <Topic></Topic>
      </Route>

    </div>
  );
}

function Contacts(){
  return(
    <div>
      <h2>Contacts</h2>
      Contacts..
    </div>
  );
}

function Topic(){
  let params = useParams();
  let id = params.id;
  let selected ={ title:'Sorry', desc:'Not found'};
  for(let i = 0 ;i < contents.length;i++)
  {
    if(contents[i].id === Number(id))
    {
      selected = contents[i];
      break;
    }
  }

  return (<div>
    <h3>{selected.desc}</h3>
  </div>);
}
function App(){
  return (
    <div className="App">
      <h1>리엑트 라우터..</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">topics</NavLink></li>
       < li><NavLink to="/contect">contect</NavLink></li>
      </ul>
     
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contect"> <Contacts></Contacts></Route>
        <Route path="/">Not Found..</Route>
      </Switch>
    </div>
  );
}
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

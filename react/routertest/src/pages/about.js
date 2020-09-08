import React from 'react';
import {BrowserRouter as Router, Link, Route,Switch, useRouteMatch,} from 'react-router-dom';

class About extends React.Component{
     
    render(){
      
        return (
        
            <div className="About-Container">
                <h1>`${this.props.path}`</h1>
                <Router>
                    <ul>
                    <li> <Link to="/about">About</Link></li> 
                    <li><Link to="/about/my">my!</Link></li>
                    </ul>
                <Switch>
                    <Route exact path="/about">
                        <AboutSub />
                    </Route>
                    <Route path= "/about/my" >
                        <MY />
                    </Route>
                </Switch>
            </Router>
            </div>
        );
    }
}

function AboutSub() {
    return (
      <div>
        <h2>AboutSub</h2>
      </div>
    );
  }
  
  function MY() {
    return (
      <div>
        <h2>MY  </h2>
      </div>
    );
  }


export default About;
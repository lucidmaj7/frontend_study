import React from 'react';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import About from '../pages/about';


class Header extends React.Component{
    render(){
        return (
            <Router>
                <div className="header-wrap">
                    <header>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">about</Link></li>
                        </ul>
                    </header>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route  path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  


  export default Header;
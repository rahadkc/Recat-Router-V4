import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import NoMatch from './pages/NoMatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
            <ul>
              <li><NavLink exact activeClassName="active" to='/'>Home</NavLink></li>
              <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
              <li><NavLink activeClassName="active" to='/topics'>Topics</NavLink></li>
            </ul>
            <hr/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/topics' component={Topics} />
              <Route component={NoMatch}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

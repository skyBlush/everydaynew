import React, { Component } from 'react';
import './App.css';
import './style/reset.css';
import Footer from './components/Footer';
import Shopcart from './components/Shopcart/Shopcart';
import FreshNews from './components/FreshNews/FreshNews';
import Home from './components/Home/Home';
import User from './components/User/User';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Redirect exact from='/' to='/home' />
              <Route path='/home' component={Home} />
              <Route path='/freshNews' component={FreshNews} />
              <Route path='/shopcart' component={Shopcart} />
              <Route path='/user' component={User} />
            </Switch>
      		  <Footer></Footer>
          </div>
        </Router>
    );
  }
}

export default App;

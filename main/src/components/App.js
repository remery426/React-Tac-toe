import React, { Component } from 'react';
import Board from './Board';
import Footer from './Footer';
import Profile from './Profile/Profile'
import {BrowserRouter, Route} from 'react-router-dom';
import * as actions from '../actions'
import {connect} from 'react-redux'
import Header from './Header';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
      <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Board} />
        <Route exact path="/Profile" component={Profile} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);

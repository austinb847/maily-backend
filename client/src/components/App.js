import React, {Component}  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/surveys" />
          <Route exact path= "/surveys/new"/>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
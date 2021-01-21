import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Route exact path="/" />
        <Route exact path="/surveys" />
        <Route exact path= "/surveys/new"/>
      </BrowserRouter>
    </div>
  );
};

export default App;
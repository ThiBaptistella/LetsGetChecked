import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    </div>
  );
}

export default App;

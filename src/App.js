import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Blog from './Blog';
import ReadBlog from './ReadBlog';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Blog} />
          <Route path="/:id" component={ReadBlog} />
        </Switch>
      </div>
    </Router>
  );
}


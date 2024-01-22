// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DashboardView from './views/dashboard/DashboardView';
import Form from './components/forms/form';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={DashboardView} />
        <Route path="/form" component={Form} />
      </Switch>
    </Router>
  );
};


export default App;
import React from 'react';
import { Route, Switch } from 'react-router';

// components
import Home from './home';
import Login from './login';
import NotFoundPage from './common/NotFoundPage';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route path="*" component={NotFoundPage}/>
  </Switch>
);
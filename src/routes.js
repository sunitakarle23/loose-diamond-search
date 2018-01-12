import React from 'react';
import { Route, Switch } from 'react-router';

// components
import Catalog from './catalog';
import Product from './product';
import NotFoundPage from './common/components/NotFoundPage';

export default (
  <Switch>
    <Route exact path="/" component={Catalog}/>
    <Route exact path="/product" component={Product}/>
    <Route path="*" component={NotFoundPage}/>
  </Switch>
);
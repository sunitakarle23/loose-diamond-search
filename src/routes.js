import React from 'react';
import { Router, Route, Switch } from 'react-router';

// components
import Catalog from './catalog';
import Product from './product';
import NotFoundPage from './common/components/NotFoundPage';

export default (
	<Router>
	  <Switch>
	    <Route exact path="/" component={Catalog} />
	    <Route exact path="/product/:productId" component={Product} />
	    <Route path="*" component={NotFoundPage}/>
	  </Switch>
  </Router>
);
import React from 'react';
import { Router, Route, Switch } from 'react-router';

// components
import Catalog from './catalog';
import NotFoundPage from './common/components/NotFoundPage';

export default (
	<Router>
	  <Switch>
		  <div>
		    <Route exact path="/" component={Catalog} />

		    <Route exact path="/catalog" component={Catalog} />

		    <Route exact path="/catalog/:id" component={Catalog} />

		    <Route path="*" component={NotFoundPage}/>
		  </div>
	  </Switch>
  </Router>
);
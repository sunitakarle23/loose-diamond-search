import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'rxjs';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
// import './utils/validators';

import './utils/ajaxConfigs';

// import styles
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/react-redux-toastr-7.1.min.css'
import './index.css';


// import common components
import Header from './common/Header'

// Routes
import routes from './routes';

ReactDOM.render(
	<Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
      	<Header />
      	<div className="wrap">
        	{routes}
        </div>
      </div>
    </ConnectedRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();

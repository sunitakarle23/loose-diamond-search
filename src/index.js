import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'rxjs';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import 'font-awesome/css/font-awesome.css';
import './styles/react-redux-toastr-7.1.min.css'
import './index.css';
import './styles/namespaced-bootstrap-v3.3.7.css';
// import common components
import Catalog from './catalog'
import LDSHeader from './common/containers/Header'


// Routes
import routes from './routes';
import './index.css';
import './common/common.css';


ReactDOM.render(
	<Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
      	<LDSHeader />
	      <div className="wrap">
          <Catalog />
        </div>
      </div>
    </ConnectedRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();

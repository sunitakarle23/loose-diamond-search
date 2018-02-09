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
import App from './App'

//import routes from './routes';
import './index.css';
import './common/common.css';

ReactDOM.render(
	<Provider store={store}>
    <ConnectedRouter history={history}>
     <App />
    </ConnectedRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();

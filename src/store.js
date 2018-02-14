import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './rootReducer';

// export `history` to use in index.js, we using `HashHistory`
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const navMiddleware = routerMiddleware(history)

const store = createStore(
	rootReducer,
	applyMiddleware(thunk),
	applyMiddleware(navMiddleware)
);

console.log('Store while initialization =>', store.getState())

export default store;
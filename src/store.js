import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'

// import the root reducer
import rootReducer from './rootReducer';

// export `history` to use in index.js, we using `HashHistory`
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const navMiddleware = routerMiddleware(history)

const store = createStore(
	rootReducer,
	applyMiddleware(navMiddleware)
);

console.log('Store while initialization =>', store.getState())

export default store;
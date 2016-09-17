import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Quope, { initState } from './reducers/rootReducers';

let store = createStore(Quope, 
	initState,
	compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
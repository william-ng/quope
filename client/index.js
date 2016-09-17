//import { changeQuote, burnChar } from './actions/actions';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/AppContainer';

//console.log(store.getState());

// let unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(changeQuote('Thanks God is Friday.'));
// store.dispatch(changeQuote('Good morning Canada.'));
// store.dispatch(burnChar('G'));
// store.dispatch(burnChar('G'));

// unsubscribe();

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);
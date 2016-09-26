import axios from 'axios';

// ACTIONS
export const START_GAME = 'START_GAME';
export const NEXT_GAME = 'NEXT_GAME';
export const GAME_READY = 'GAME_READY';
export const PLAY_GAME = 'PLAY_GAME';
export const FETCH_QUOTE = 'FETCH_QUOTE';
export const QUOTE_RECEIVED = 'QUOTE_RECEIVED';
export const FETCH_QUOTE_FAILED = 'FETCH_QUOTE_FAILED';
export const BURN_CHAR = 'BURN_CHAR';
export const DONE_TYPING = 'DONE_TYPING';
export const GET_STATS = 'GET_STATS';
export const PUSH_HISTORY = 'PUSH_HISTORY';

// STATUS
export const GAME_STATUS = {
	IDLE : 'idle',
	FETCH: 'fetch',
	ERROR: 'error',
	READY: 'ready',
	PLAY: 'play',
	FINISHED: 'finished'
};

// export function startGame() {
// 	return {
// 		type: START_GAME
// 	}
// }

function gameReady() {
	return {
		type: GAME_READY
	}
}

export function playGame() {
	return {
		type: PLAY_GAME
	}
}

export function burnChar(char) {
	return {
		type: BURN_CHAR, char
	}
}

function fetchQuote() {
	return {
		type: FETCH_QUOTE
	}
}

function quoteReceived(quote, author) {
	return {
		type: QUOTE_RECEIVED, quote, author
	}
}

function fetchQuoteFailed() {
	return {
		type: FETCH_QUOTE_FAILED
	}
}

export function startGame() {
	return dispatch => {
		dispatch(fetchQuote());

		axios.defaults.headers.common['X-Mashape-Key'] = "WsCFBgSoaymshGlEMAbK07baWQHdp1EpGIqjsnPFRvTQ0MAGG3";
		axios.defaults.headers.common['Content-Type'] = "application/x-www-form-urlencoded";
		axios.defaults.headers.common['Accept'] = "application/json";
		axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous')
			.then(function(response) {
				if (response.status >= 400) {
					console.log('Request failed');
		            dispatch(fetchQuoteFailed());
		        } else {
		        	return response.data;
		        }
			}, function(reason) {
		    	console.log(reason);
		    	dispatch(fetchQuoteFailed());
		    })
			.then(function(response) {
		        dispatch(quoteReceived(response.quote, response.author));
		    })
		    .then(function() {
		    	dispatch(gameReady());
		    });
	}
}

function pushHistory(game) {
	return {
		type: PUSH_HISTORY,
		game: game
	}
}

export function nextGame(game) {
	return dispatch => {
		dispatch(pushHistory(game));

		dispatch(startGame());
	}
}


export function doneTyping() {
	return {
		type: DONE_TYPING
	}
}

export function getStats() {
	return {
		type: GET_STATS
	}
}
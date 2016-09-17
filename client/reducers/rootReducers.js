import { FETCH_QUOTE, QUOTE_RECEIVED, FETCH_QUOTE_FAILED, BURN_CHAR, DONE_TYPING, GET_STATS, START_GAME, PLAY_GAME, GAME_READY } from '../actions/actions';
import { GAME_STATUS } from '../actions/actions';
import { combineReducers } from 'redux';
//import _ from 'lodash';

export const initState = {
	game: {
		quote: {
			say: '',
			by: ''
		},
		play_quote: '',
		mistyped: 0,
		start_time: null,
		stats: {
			speed: 0,
			accuracy: 0,
			score: 0
		},
		status: GAME_STATUS.IDLE
	},
	history: [],
	settings: {

	}
}


function getStats(game) {
	const time = new Date() - game.start_time;
	const length = game.quote.say.length;
	const mulitplier = 2;

	const speed = Math.round((length / (time / 1000)) * 100) / 100;
	const accuracy = Math.round(((length - game.mistyped) / length) * 100);
	const score = Math.round(speed * accuracy * mulitplier);

	return { speed, accuracy, score }

}

function quote(state = {}, action) {
	switch(action.type) {
		case FETCH_QUOTE:
		case FETCH_QUOTE_FAILED:
			return Object.assign({}, state, 
				{
					say: '',
					by: ''
				}
			);
			break;
		case QUOTE_RECEIVED:
			return Object.assign({}, state, 
				{
					say: action.quote,
					by: action.author
				}
			);
			break;
		default:
			return state;
			break;
	}
}

function game(state = {}, action) {
	switch(action.type) {
		case FETCH_QUOTE:
			return Object.assign({}, state, 
				{ 
					quote: quote(state.quote, action),
					play_quote: '',
					mistyped: 0,
					start_time: null,
					stats: {
						speed: 0,
						accuracy: 0,
						score: 0
					},
					status: GAME_STATUS.FETCH
				}
			);
			break;
		case FETCH_QUOTE_FAILED:
			return Object.assign({}, state, 
				{ 
					quote: quote(state.quote, action),
					stats: {
						speed: 0,
						accuracy: 0,
						score: 0
					},
					status: GAME_STATUS.ERROR
				}
			);
			break;
		case QUOTE_RECEIVED:
			return Object.assign({}, state, 
				{
					quote: quote(state.quote, action),
					play_quote: action.quote,
					status: GAME_STATUS.READY
				}
			);
			break;
		case BURN_CHAR:
			if(!state.play_quote)  {
				return state;
			}
			else {
				return Object.assign({}, state, 
					{	
						quote: quote(state.quote, action),
						play_quote: (state.play_quote.indexOf(action.char) == 0 && state.status == GAME_STATUS.PLAY) ? state.play_quote.substring(1) : state.play_quote,
						mistyped: (state.play_quote.indexOf(action.char) == 0 || state.status != GAME_STATUS.PLAY) ? state.mistyped : state.mistyped + 1
					}
				);
			}
			break;
		case DONE_TYPING:
			return Object.assign({}, state, 
				{
					quote: quote(state.quote, action),
					stats: getStats(state),
					status: GAME_STATUS.FINISHED
				}
			);
			break;
		case GET_STATS:
			return Object.assign({}, state, 
				{
					quote: quote(state.quote, action),
					stats: getStats(state),
				}
			);
			break;
		case GAME_READY:
			return Object.assign({}, state, 
				{
					quote: quote(state.quote, action),
					status: GAME_STATUS.READY
				}
			);
			break;
		case PLAY_GAME:
			return Object.assign({}, state, 
				{
					quote: quote(state.quote, action),
					status: GAME_STATUS.PLAY,
					start_time: new Date()
				}
			);
			break;
		default:
			return state;
			break;
	}
}

function settings(state = {}, action) {
	return state;
}

function history(state = [], action) {
	return state;
}

const Quope = combineReducers({ game, history, settings });

export default Quope;
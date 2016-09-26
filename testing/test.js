import assert from 'assert';
import reducer from '../client/reducers/rootReducers';
import {GAME_STATUS} from '../client/actions/actions';

const initState = {
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
	settings: {}
}
describe('Reducers', () => {

	it('pushHistory', () => {

		const nextState = reducer(initState, {type: 'PUSH_HISTORY', game: initState.game});
		initState.game.mistyped++;
		assert.notEqual(initState.game, nextState.history[0]);

	});

});
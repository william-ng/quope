import { connect } from 'react-redux';
import { startGame, playGame, burnChar, doneTyping, nextGame } from '../actions/actions';
import App from '../components/App';

const mapStateToProps = (state) => {
	return {
		game: state.game,
		setting: state.setting,
		history: state.history
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startGame: () => { dispatch(startGame()) },
		playGame: () => { dispatch(playGame()) },
		pressKey: (k) => { dispatch(burnChar(k)) },
		doneTyping: () => { dispatch(doneTyping()) },
		nextGame: (g) => {dispatch(nextGame(g)) }
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
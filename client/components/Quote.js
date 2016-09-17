import React, { PropTypes } from 'react';
import CountDown from './CountDown';
import { GAME_STATUS } from '../actions/actions';

class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.onKeyPress = this.onKeyPress.bind(this);
		this.finishedCountdown = this.finishedCountdown.bind(this);
		document.addEventListener('keypress', this.onKeyPress);
	}

	componentDidMount() {

	}

	componentDidUpdate() {
		if(this.props.game.play_quote == '' &&  this.props.game.status == GAME_STATUS.PLAY) {
			this.props.doneTyping();
		}
	}

	onKeyPress(e) {
		this.props.pressKey(e.key);
	}

	finishedCountdown() {
		this.props.playGame();
	}

	render() {
		if(this.props.game.status == GAME_STATUS.PLAY) {
			let typed_in = this.props.game.quote.say.length - this.props.game.play_quote.length;
			let quote = this.props.game.quote.say.split('').map(function(c, i) {
				return (
					<span key={i} className={(i < typed_in) ? 'typed' : ''}>{c}</span>
				);
			});

			return (
				<div id="quote-card" className="card">
					<div className="quote"><blockquote><p>{quote}</p></blockquote></div>
					<div className="author">&mdash;{this.props.game.quote.by}</div>
				</div>
			);
		} else if(this.props.game.status == GAME_STATUS.READY) {
			return (
				<CountDown count={3} callback={this.finishedCountdown}/>
			);
		}			

		return ( <div></div> );
	}
}

export default Quote;
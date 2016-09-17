import React from 'react';
//import { Motion, spring } from 'react-motion';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { GAME_STATUS } from '../actions/actions';

class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.startGame = this.startGame.bind(this);
	}

	startGame() {
		this.props.startGame();
	}

	render() {

		const button = (this.props.game.status == GAME_STATUS.IDLE) ? <button id="start-button" type="button" className="btn-lg btn-style-capsule" onClick={this.startGame}>Start Game</button> : '';
			
		return (
				<ReactCSSTransitionGroup
					transitionName="start-button"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					>
					{button}
				</ReactCSSTransitionGroup>
		);

	}
}

export default Buttons;
import React from 'react';
import Logo from './Logo';
import Quote from './Quote';
import Buttons from './Buttons';
import ScoreCard from './ScoreCard';
import { GAME_STATUS } from '../actions/actions';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const stats = (this.props.game.status == GAME_STATUS.FINISHED) ? (<ScoreCard stats={this.props.game.stats} startGame={this.props.startGame} />) : ''; 

		return (
			<div id="game-space" className="container">
				<Logo  status={this.props.game.status}/>
				<Quote 
					pressKey={this.props.pressKey} 
					doneTyping={this.props.doneTyping} 
					playGame={this.props.playGame}
					game={this.props.game}
				/>
				<Buttons
					startGame={this.props.startGame}
					game={this.props.game}
				/>
				{stats}
			</div>
		);
	}
}
		
export default App;

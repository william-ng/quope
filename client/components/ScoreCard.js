import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ScoreCard extends React.Component {
	constructor(props) {
		super(props);
		this.startGame = this.startGame.bind(this);
		this.nextGame = this.nextGame.bind(this);
	}

	startGame() {
		this.props.startGame();
	}

	nextGame() {
		this.props.nextGame(this.props.game);
	}

	render() {
		const total = this.props.history.reduce((total, g) => {
			return total + g.stats.score;
		}, 0) + this.props.stats.score;

const data = [
      {score: 13, speed: 4000, accuracy: 2400},
      {score: 32, speed: 3425, accuracy: 123},
      {score: 45, speed: 2434, accuracy: 9080},
];
		return (
			<ReactCSSTransitionGroup
				component="span"
				transitionName="score-card"
				transitionAppear={true} 
	        	transitionAppearTimeout={500}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>
				<div id="score-card" className="card">
					<header>Game Stats</header>
					<hr className="fancy" />
					<div className="row">
						<div className="col-xs-6">
							<label>Speed</label>
						</div>
						<div className="col-xs-6">
							<span className="pull-right stat">{this.props.stats.speed} char/sec</span>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<label>Accuracy</label>
						</div>
						<div className="col-xs-6">
							<span className="pull-right stat">{this.props.stats.accuracy}%</span>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<label>Score</label>
						</div>
						<div className="col-xs-6">
							<span className="pull-right stat">{this.props.stats.score}</span>
						</div>
					</div>
					<hr className="fancy" />
					<div className="row">
						<div className="col-xs-6">
							<label>Total Score</label>
						</div>
						<div className="col-xs-6">
							<span className="pull-right stat">{total}</span>
						</div>
					</div>
					<div className="row">
						<div className="col-sx-12">
							<button id="next-button" type="button" className="btn-lg btn-style-capsule center-block" onClick={this.nextGame}>Next Quote</button>
						</div>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}

export default ScoreCard;
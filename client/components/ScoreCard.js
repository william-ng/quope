import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ScoreCard extends React.Component {
	constructor(props) {
		super(props);
		this.startGame = this.startGame.bind(this);
	}

	startGame() {
		this.props.startGame();
	}

	render() {
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
					<hr className="fancy" />
					<div className="row">
						<div className="col-xs-6">
							<label>Score</label>
						</div>
						<div className="col-xs-6">
							<span className="pull-right stat">{this.props.stats.score}</span>
						</div>
					</div>
					<div className="row">
						<div className="col-sx-12">
							<button id="next-button" type="button" className="btn-lg btn-style-capsule center-block" onClick={this.startGame}>Next Quote</button>
						</div>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}

export default ScoreCard;
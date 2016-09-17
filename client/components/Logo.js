import React from 'react';
import { GAME_STATUS } from '../actions/actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Logo = (props) => {
	switch(props.status) {
		case GAME_STATUS.FINISHED:
		case GAME_STATUS.PLAY:
		case GAME_STATUS.READY:
		case GAME_STATUS.FETCH:
		case GAME_STATUS.ERROR:
			return(
				<ReactCSSTransitionGroup
					transitionName="logo-play"
					transitionAppear={true} 
					transitionAppearTimeout={200}
					transitionEnterTimeout={200}
					transitionLeaveTimeout={0}
					>
					<div id="logo" className="small">
						<img src="./images/quope-v2.png" />
					</div>
				</ReactCSSTransitionGroup>
			);
			break;
		default:
			return (
				<div id="logo">
					<img src="./images/quope-v2.png" />
					<div className="tagline">Type to Learn | Learn to Type</div>
				</div>
			);
			break;
	}
}

export default Logo;
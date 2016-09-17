import React from 'react';
import AnimateChar from './AnimateChar';

class CountDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: this.props.count }
		this.startCounter = this.startCounter.bind(this);
		this.updateCounter = this.updateCounter.bind(this);
	}

	componentDidMount() {
		this.startCounter();
	}

	startCounter() {
		const timer = setInterval(this.updateCounter, 1000);
		this.setState({timer: timer});
	}

	updateCounter() {
		if(this.state.count == 0) {
			clearInterval(this.state.timer);
			this.props.callback();
		} else {
			this.setState({count: this.state.count - 1});
		}
	}

	render() {
		return (
			<div id="count-down">
				<AnimateChar key={this.state.count} char={this.state.count ? this.state.count : 'Go'} animate={'out'} />
			</div>
		);
	}
}

CountDown.propTypes = {
	count: React.PropTypes.number
};

export default CountDown;
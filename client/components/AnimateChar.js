import React from 'react';
import {Motion, spring} from 'react-motion';

class AnimateChar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	getStyle() {
		const baseStyle = { scale: 1, opacity: 1}
		const modStyle = { scale: 2, opacity: 0 }

		if(this.props.animate == 'in') {
			return {
				start: modStyle,
				end: baseStyle
			}
		}

		return {
			start: baseStyle,
			end: modStyle
		}
	}

	render() {
		const style = this.getStyle();

		return (
			<Motion defaultStyle={style.start} style={{ scale: spring(style.end.scale), opacity: spring(style.end.opacity)}}>
				{
					interpolatingStyle => <span style={{ transform: `scale(${interpolatingStyle.scale})`, opacity: interpolatingStyle.opacity }}>{this.props.char}</span>
				}
			</Motion>
		);
	}
}

AnimateChar.propTypes = {
	char: React.PropTypes.oneOfType([
  		React.PropTypes.string,
  		React.PropTypes.number
  	]),
  	animate: React.PropTypes.string
};

AnimateChar.defaultProps = { animate: 'in' };

export default AnimateChar;
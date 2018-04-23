import React, { Component } from 'react';
import './trump.css';
import chin from './chin.png';
import hair from './hair.png';
import leftEar from './leftEar.png';
import leftEye from './leftEye.png';
import leftHand from './leftHand.png';
import mouth from './mouth.png';
import nose from './nose.png';
import rightEye from './rightEye.png';
import rightHand from './rightHand.png';
import americanDream from './american-dream.wav';
// import from '';

const styles = {
	hair: {
		position: 'absolute',
		top: '5%',
		height: '30%',
		left: '20%'
	}
};

class Trump extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		};
	}

	onEnter = () => {
		this.setState(prevState => ({
			active: true
		}));
	};

	onLeave = () => {
		this.setState(prevState => ({
			active: false
		}));
	};

	render() {
		return (
			<div
				className="trump-wrapper"
				onMouseEnter={this.onEnter}
				onMouseLeave={this.onLeave}
			>
				<img
					className={this.state.active ? 'shake' : ''}
					src={hair}
					styles={styles.hair.img}
					alt="Hair"
				/>
				<img className="leftEar" src={leftEar} alt="Left Ear" />
				<img className="leftEye" src={leftEye} alt="Left Eye" />
				<img className="nose" src={nose} alt="Nose" />
				<img className="rightEye" src={rightEye} alt="Right Eye" />
				<img className="mouth" src={mouth} alt="Mouth" />
				<img className="rightHand" src={rightHand} alt="Right Hand" />
				<img className="leftHand" src={leftHand} alt="Left Hand" />
				<img className="chin" src={chin} alt="chin" />
			</div>
		);
	}
}

export default Trump;

import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import RText from './../../Components/RText';
import RhondaImages from './../../Components/RhondaImages';
import HomeButton from './../../Components/HomeButton';
import './RadioactiveRhonda.css';

class RadioactiveRhonda extends Component {
	render() {
		return (
			<div>
				<RhondaImages />
				<LilyWales color="rgb(0,255,126)" />
				<RText color="rgb(255,32,32)" />
				<HomeButton color="rgb(0,255,126)" />
			</div>
		);
	}
}

export default RadioactiveRhonda;

import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import RText from './../../Components/RText';
import RhondaImages from './../../Components/RhondaImages';
import HomeButton from './../../Components/HomeButton';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import './RadioactiveRhonda.css';

class RadioactiveRhonda extends Component {
	render() {
		return (
			<div>
				<RhondaImages />
				<ProjectTitle title="Radioactive Rhonda!" color="rgb(255,32,32)" />
				<LilyWales color="rgb(0,255,126)" />
				<RText color="rgb(255,32,32)" />
				<HomeButton color="rgb(0,255,126)" top="487%" right="33%" />
				<BackToTop color="rgb(0,255,126)" top="482%" left="61%" />
			</div>
		);
	}
}

export default RadioactiveRhonda;

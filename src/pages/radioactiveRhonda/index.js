import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
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
				<MediaQuery minWidth={600}>
					<ProjectTitle title="Radioactive Rhonda!" color="rgb(255,32,32)" />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<ProjectTitle
						title="Radioactive Rhonda!"
						color="rgb(255,32,32)"
						lineHeight="0.7"
						top="26px"
					/>
				</MediaQuery>
				<LilyWales color="rgb(0,255,126)" />
				<RText color="rgb(255,32,32)" />
				<MediaQuery minWidth={600}>
					<HomeButton color="rgb(0,255,126)" top="487%" right="33%" />
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<HomeButton
						color="rgb(0,255,126)"
						top="366%"
						right="9%"
						paddingBottom="15px"
					/>
				</MediaQuery>
				<MediaQuery minWidth={600}>
					<BackToTop color="rgb(0,255,126)" top="482%" left="61%" />
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<BackToTop color="rgb(0,255,126)" top="363%" right="9%" />
				</MediaQuery>
			</div>
		);
	}
}

export default RadioactiveRhonda;

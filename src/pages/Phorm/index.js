import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import HomeButton from './../../Components/HomeButton';
import PhormContent from './../../Components/PhormContent';
import './Phorm.css';

class Phorm extends Component {
	render() {
		return (
			<div>
				<PhormContent />
				<ProjectTitle title="Phorm" color="rgb(255,85,1)" />
				<LilyWales color="rgb(5,176,255)" />

				<BackToTop color="rgb(5,176,255)" top="512%" right="8%" />
				<HomeButton color="rgb(5,176,255)" top="517%" right="8%" />
			</div>
		);
	}
}

export default Phorm;

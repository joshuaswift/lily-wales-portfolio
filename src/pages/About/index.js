import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import HomeButton from './../../Components/HomeButton';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import AboutContent from './../../Components/AboutContent';

class BabyJanes extends Component {
	render() {
		return (
			<div>
				<AboutContent />
				<LilyWales color="rgb(248,39,127)" />
				<HomeButton color="rgb(248,39,127)" top="202%" right="5.5%" />
				<ProjectTitle title="About" color="rgb(0,204,255)" />
				<BackToTop top="198%" color="rgb(248,39,127)" right="5.5%" />
			</div>
		);
	}
}

export default BabyJanes;

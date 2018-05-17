import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import HomeButton from './../../Components/HomeButton';
// import './BikiniBottom.css';

class BikiniBottom extends Component {
	render() {
		return (
			<div>
				<ProjectTitle title="Bikini Bottom" color="rgb(12,206,107)" />
				<LilyWales color="rgb(255,114,0)" />
				<BackToTop color="rgb(255,114,0)" />
				<HomeButton color="rgb(255,114,0)" />
			</div>
		);
	}
}

export default BikiniBottom;

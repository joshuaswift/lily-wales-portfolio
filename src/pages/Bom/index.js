import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import HomeButton from './../../Components/HomeButton';
import BomContent from './../../Components/BomContent';
import './Bom.css';

class Bom extends Component {
	render() {
		return (
			<div>
				<ProjectTitle title="Recreational Retina" color="rgb(12,206,107)" />
				<LilyWales color="rgb(255,114,0)" />
				<BackToTop color="rgb(255,114,0)" top="264%" right="5.5%" />
				<HomeButton color="rgb(255,114,0)" top="269%" right="5.5%" />
				<BomContent />
			</div>
		);
	}
}

export default Bom;

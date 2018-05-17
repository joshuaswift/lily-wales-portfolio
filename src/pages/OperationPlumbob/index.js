import React, { Component } from 'react';
import './OperationPlumbob.css';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import OPimages from './../../Components/OPimages';
import OPText from './../../Components/OPText';
import HomeButton from './../../Components/HomeButton';
import BackToTop from './../../Components/BackToTop';

class OperationPlumbob extends Component {
	render() {
		return (
			<div>
				<OPimages />
				<OPText />
				<LilyWales color="rgb(255,32,32)" />
				<HomeButton color="rgb(255,32,32)" top="511%" right="44%" />
				<ProjectTitle title="Operation Plumbob" color="rgb(88, 246, 241)" />
				<BackToTop color="rgb(255,32,32)" top="507%" right="44%" />
			</div>
		);
	}
}

export default OperationPlumbob;

// <div className="animate-bottom" >

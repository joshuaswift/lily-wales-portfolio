import React, { Component } from 'react';
import './OperationPlumbob.css';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import OPimages from './../../Components/OPimages';
import OPText from './../../Components/OPText';
import HomeButton from './../../Components/HomeButton';
// import ScrollToTop from './../../Components/ScrollToTop';

class OperationPlumbob extends Component {
	render() {
		return (
			<div>
				<OPimages />
				<OPText />
				<LilyWales color="rgb(255,32,32)" />
				<HomeButton color="rgb(255,32,32)" top="511%" right="44%" />
				{/* <ScrollToTop color="rgb(255,32,32)" top="500%" right="44%" /> */}
				<ProjectTitle title="Operation Plumbob" />
			</div>
		);
	}
}

export default OperationPlumbob;

// <div className="animate-bottom" >

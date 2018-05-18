import React, { Component } from 'react';
import './OperationPlumbob.css';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import OPimages from './../../Components/OPimages';
import OPText from './../../Components/OPText';
import HomeButton from './../../Components/HomeButton';
import BackToTop from './../../Components/BackToTop';
import MediaQuery from 'react-responsive';

class OperationPlumbob extends Component {
	render() {
		return (
			<div>
				<OPimages />
				<OPText />

				<MediaQuery minWidth={600}>
					<ProjectTitle title="Operation Plumbob" color="rgb(88, 246, 241)" />
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<ProjectTitle
						title="Operation Plumbob"
						color="rgb(88, 246, 241)"
						lineHeight="0.7"
						top="26px"
					/>
				</MediaQuery>
				<LilyWales color="rgb(255,32,32)" />
				<MediaQuery minWidth={600}>
					<HomeButton color="rgb(255,32,32)" top="511%" right="44%" />
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<HomeButton color="rgb(255,32,32)" top="511%" right="44%" />
				</MediaQuery>
				<MediaQuery minWidth={600}>
					<BackToTop color="rgb(255,32,32)" top="507%" right="44%" />
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<BackToTop color="rgb(255,32,32)" top="507%" right="44%" />
				</MediaQuery>
			</div>
		);
	}
}

export default OperationPlumbob;

// <div className="animate-bottom" >

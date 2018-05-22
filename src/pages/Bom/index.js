import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
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
				{' '}
				<BomContent />
				<MediaQuery minWidth={600}>
					<ProjectTitle title="Recreational Retina" color="rgb(12,206,107)" />
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<ProjectTitle
						title="Recreational Retina"
						color="rgb(12,206,107)"
						lineHeight="0.7"
						top="26px"
					/>
				</MediaQuery>
				<LilyWales color="rgb(255,114,0)" />
				<BackToTop color="rgb(255,114,0)" top="312%" right="2.5%" />
				<HomeButton color="rgb(255,114,0)" top="316%" right="2.5%" />
			</div>
		);
	}
}

export default Bom;

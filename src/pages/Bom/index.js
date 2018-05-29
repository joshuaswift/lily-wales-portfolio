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
				<MediaQuery minWidth={601}>
					<ProjectTitle
						title="Recreational Retina"
						color="rgb(12,206,107)"
						width="92%"
					/>
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<ProjectTitle
						title="Recreational Retina"
						color="rgb(12,206,107)"
						lineHeight="0.7"
						top="26px"
					/>
				</MediaQuery>
				<LilyWales color="rgb(255,114,0)" />
				<MediaQuery maxWidth={600}>
					<HomeButton
						color="rgb(255,114,0)"
						top="541%"
						left="9%"
						paddingBottom="30px"
					/>{' '}
				</MediaQuery>
				<MediaQuery maxWidth={899} minWidth={601}>
					<HomeButton
						color="rgb(255,114,0)"
						top="196%"
						right="9%"
						paddingBottom="30px"
					/>{' '}
				</MediaQuery>
				<MediaQuery minWidth={900}>
					<HomeButton
						color="rgb(255,114,0)"
						top="335%"
						left="2.8%"
						paddingBottom="30px"
					/>
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<BackToTop color="rgb(255,114,0)" top="538%" left="9%" />
				</MediaQuery>
				<MediaQuery maxWidth={899} minWidth={601}>
					<BackToTop color="rgb(255,114,0)" top="193%" right="9%" />
				</MediaQuery>
				<MediaQuery minWidth={900}>
					<BackToTop color="rgb(255,114,0)" top="330%" left="2.8%" />
				</MediaQuery>
			</div>
		);
	}
}

export default Bom;

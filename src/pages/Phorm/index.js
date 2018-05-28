import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
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
				<MediaQuery minWidth={900}>
					<HomeButton color="rgb(5,176,255)" top="517%" right="8%" />
				</MediaQuery>
				<MediaQuery maxWidth={899} minWidth={601}>
					<HomeButton
						color="rgb(5,176,255)"
						top="271%"
						left="2.5%"
						paddingBottom={'20px'}
					/>{' '}
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<HomeButton
						color="rgb(5,176,255)"
						top="292%"
						right="9%"
						paddingBottom="15px"
					/>
				</MediaQuery>
				<MediaQuery minWidth={900}>
					<BackToTop color="rgb(5,176,255)" top="512%" right="8%" />{' '}
				</MediaQuery>
				<MediaQuery minWidth={601} maxWidth={899}>
					<BackToTop color="rgb(5,176,255)" top="267%" left="2.5%" />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={601}>
					<BackToTop color="rgb(5,176,255)" top="289%" right="9%" />{' '}
				</MediaQuery>
			</div>
		);
	}
}

export default Phorm;

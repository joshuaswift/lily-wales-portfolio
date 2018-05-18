import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import HomeButton from './../../Components/HomeButton';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import AboutContent from './../../Components/AboutContent';
import MediaQuery from 'react-responsive';

class BabyJanes extends Component {
	render() {
		return (
			<div>
				<AboutContent />
				<LilyWales color="rgb(248,39,127)" />
				<MediaQuery minWidth={600}>
					<HomeButton color="rgb(248,39,127)" top="201%" right="13.5%" />
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<HomeButton color="rgb(248,39,127)" top="156%" left="11%" />
				</MediaQuery>
				<ProjectTitle title="About" color="rgb(0,204,255)" />
				<MediaQuery minWidth={600}>
					<BackToTop top="197%" color="rgb(248,39,127)" right="5.5%" />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<BackToTop top="153%" color="rgb(248,39,127)" left="11%" />
				</MediaQuery>
			</div>
		);
	}
}

export default BabyJanes;

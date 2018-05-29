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
				<MediaQuery minWidth={900}>
					<HomeButton color="rgb(248,39,127)" top="201%" right="5.5%" />
				</MediaQuery>
				<MediaQuery minWidth={601} maxWidth={899}>
					<HomeButton
						top="195.5%"
						color="rgb(248,39,127)"
						left="10%"
						paddingBottom="20px"
					/>{' '}
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<HomeButton color="rgb(248,39,127)" top="156%" left="11%" />
				</MediaQuery>

				<MediaQuery maxWidth={600}>
					<ProjectTitle title="About" color="rgb(0,204,255)" top="37px" />
				</MediaQuery>

				<MediaQuery minWidth={601} maxWidth={899}>
					<ProjectTitle title="About" color="rgb(0,204,255)" top="65px" />
				</MediaQuery>
				<MediaQuery minWidth={900}>
					<ProjectTitle title="About" color="rgb(0,204,255)" />
				</MediaQuery>

				<MediaQuery minWidth={900}>
					<BackToTop top="197%" color="rgb(248,39,127)" right="5.5%" />{' '}
				</MediaQuery>
				<MediaQuery minWidth={601} maxWidth={899}>
					<BackToTop top="192%" color="rgb(248,39,127)" left="10%" />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<BackToTop top="153%" color="rgb(248,39,127)" left="11%" />
				</MediaQuery>
			</div>
		);
	}
}

export default BabyJanes;

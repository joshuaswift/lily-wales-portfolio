import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import HomeButton from './../../Components/HomeButton';
import BikiniBottomContent from './../../Components/BikiniBottomContent';

class BikiniBottom extends Component {
	render() {
		return (
			<div>
				<BikiniBottomContent />
				<MediaQuery minWidth={900}>
					<ProjectTitle title="Bikini Bottom" color="rgb(201,0,203)" />
				</MediaQuery>
				<MediaQuery minWidth={600} maxWidth={899}>
					<ProjectTitle
						title="Bikini Bottom"
						color="rgb(201,0,203)"
						top="65.5px"
					/>{' '}
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<ProjectTitle
						title="Bikini Bottom"
						color="rgb(201,0,203)"
						top="37px"
					/>
				</MediaQuery>

				<MediaQuery minWidth={601} />

				<LilyWales color="rgb(30,255,0)" />

				<MediaQuery minWidth={900}>
					<BackToTop color="rgb(201,0,203)" top="880%" left="5.5%" />
				</MediaQuery>
				<MediaQuery maxWidth={899} minWidth={601}>
					<BackToTop color="rgb(201,0,203)" top="481%" left="5.5%" />
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<BackToTop color="rgb(201,0,203)" top=" 661%" left="6%" />
				</MediaQuery>

				<MediaQuery minWidth={900}>
					<HomeButton
						color="rgb(201,0,203)"
						top="885%"
						left="5.5%"
						paddingBottom="50px"
					/>{' '}
				</MediaQuery>
				<MediaQuery maxWidth={899} minWidth={601}>
					<HomeButton
						color="rgb(201,0,203)"
						top="485%"
						left="5.5%"
						paddingBottom="50px"
					/>{' '}
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<HomeButton
						color="rgb(201,0,203)"
						top=" 664%"
						left="6%"
						paddingBottom="50px"
					/>{' '}
				</MediaQuery>
			</div>
		);
	}
}

export default BikiniBottom;

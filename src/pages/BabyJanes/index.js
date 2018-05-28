import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import LilyWales from './../../Components/LilyWales';
import BJimages from './../../Components/BJimages';
import BJText from './../../Components/BJText';
import HomeButton from './../../Components/HomeButton';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import './BabyJanes.css';

class BabyJanes extends Component {
	render() {
		return (
			<div>
				<BJimages />
				<BJText />
				<MediaQuery minWidth={900}>
					<ProjectTitle
						title="What ever happened to all the Baby Janes?"
						color="rgb(108, 0, 255)"
						lineHeight="0.7"
						top="114px"
						width="90%"
					/>
				</MediaQuery>
				<MediaQuery minWidth={601} maxWidth={899}>
					<ProjectTitle
						title="What ever happened to all the Baby Janes?"
						color="rgb(108, 0, 255)"
						lineHeight="0.7"
						top="51px"
					/>{' '}
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<ProjectTitle
						title="What ever happened to all the Baby Janes?"
						color="rgb(108, 0, 255)"
						lineHeight="0.7"
						top="26px"
					/>
				</MediaQuery>
				<LilyWales color="rgb(255,114,0)" lineHeight="normal" />

				<MediaQuery minWidth={900}>
					<HomeButton color="rgb(255,114,0)" top="879%" right="9%" />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={899} minWidth={601}>
					<HomeButton
						color="rgb(255,114,0)"
						top="492%"
						right="5.5%"
						paddingBottom="28px"
					/>
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<HomeButton
						color="rgb(255,114,0)"
						top="409%"
						right="9%"
						paddingBottom="15px"
					/>
				</MediaQuery>
				<MediaQuery minWidth={900}>
					<BackToTop top="874%" color="rgb(255,114,0)" right="9%" />{' '}
				</MediaQuery>
				<MediaQuery minWidth={601} maxWidth={899}>
					<BackToTop top="489%" color="rgb(255,114,0)" right="5.5%" />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<BackToTop top="406%" color="rgb(255,114,0)" right="9%" />{' '}
				</MediaQuery>
			</div>
		);
	}
}

export default BabyJanes;

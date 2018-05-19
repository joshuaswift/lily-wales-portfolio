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

				<MediaQuery minWidth={600}>
					<ProjectTitle
						title="What ever happened to all the Baby Janes?"
						color="rgb(108, 0, 255)"
					/>{' '}
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<ProjectTitle
						title="What ever happened to all the Baby Janes?"
						color="rgb(108, 0, 255)"
						lineHeight="0.7"
						top="26px"
					/>
				</MediaQuery>
				<LilyWales color="rgb(255,114,0)" lineHeight="normal" />

				<MediaQuery minWidth={600}>
					<HomeButton color="rgb(255,114,0)" top="879%" right="44%" />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<HomeButton
						color="rgb(255,114,0)"
						top="409%"
						right="9%"
						paddingBottom="15px"
					/>
				</MediaQuery>
				<MediaQuery minWidth={600}>
					<BackToTop top="874%" color="rgb(255,114,0)" right="35%" />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<BackToTop top="406%" color="rgb(255,114,0)" right="9%" />{' '}
				</MediaQuery>
			</div>
		);
	}
}

export default BabyJanes;

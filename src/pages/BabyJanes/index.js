import React, { Component } from 'react';
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
				<LilyWales color="rgb(255,114,0)" lineHeight="normal" />
				<HomeButton color="rgb(255,114,0)" top="879%" right="44%" />
				<ProjectTitle
					title="What ever happened to all the Baby Janes?"
					color="rgb(108, 0, 255)"
				/>
				<BackToTop top="874%" color="rgb(255,114,0)" right="35%" />
			</div>
		);
	}
}

export default BabyJanes;

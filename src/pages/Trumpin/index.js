import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import HomeButton from './../../Components/HomeButton';
import Trump from './../../Components/Trump';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import './Trumpin.css';

class Trumpin extends Component {
	render() {
		return (
			<div>
				<Trump />
				<ProjectTitle title="Trumpin" color="rgb(238,141,175)" />
				<LilyWales color="rgb(239,62,54)" />
				<HomeButton color="rgb(238,141,175)" right="5%" />
			</div>
		);
	}
}

export default Trumpin;

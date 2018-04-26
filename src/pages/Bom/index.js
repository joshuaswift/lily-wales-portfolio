import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import './Bom.css';

class Bom extends Component {
	render() {
		return (
			<div>
				<ProjectTitle title="Recreational Retina" color="rgb(12,206,107)" />
				<LilyWales color="rgb(255,114,0)" />
			</div>
		);
	}
}

export default Bom;

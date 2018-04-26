import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import './Nuclearosis.css';

class Nuclearosis extends Component {
	render() {
		return (
			<div>
				<ProjectTitle title="Nuclearosis" />
				<LilyWales />
			</div>
		);
	}
}

export default Nuclearosis;

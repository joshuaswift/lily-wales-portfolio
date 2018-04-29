import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import './LasVagueness.css';

class LasVagueness extends Component {
	render() {
		return (
			<div>
				<ProjectTitle title="Las Vagueness" />
				<LilyWales />
				<BackToTop />
			</div>
		);
	}
}

export default LasVagueness;

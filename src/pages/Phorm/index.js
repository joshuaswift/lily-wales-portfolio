import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import './Phorm.css';

class Phorm extends Component {
	render() {
		return (
			<div>
				<ProjectTitle title="Phorm" />
				<LilyWales />
			</div>
		);
	}
}

export default Phorm;

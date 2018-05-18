import React, { Component } from 'react';
import './WarMachine.css';
import LilyWales from './../../Components/LilyWales';
import WMContent from './../../Components/WMContent';
import HomeButton from './../../Components/HomeButton';
import BackToTop from './../../Components/BackToTop';
import ProjectTitle from './../../Components/ProjectTitle';

class WarMachine extends Component {
	render() {
		return (
			<div>
				<WMContent />
				<ProjectTitle title="War Machine" color="rgb(245, 27, 236)" />
				<LilyWales color={'rgb(0, 41, 255)'} />
				<HomeButton top={'639%'} left={'35%'} />
				<BackToTop top={'629%'} left={'26%'} />
			</div>
		);
	}
}

export default WarMachine;

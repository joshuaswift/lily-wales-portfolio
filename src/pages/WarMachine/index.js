import React, { Component } from 'react';
import './WarMachine.css';
import LilyWales from './../../Components/LilyWales';
import WMimages from './../../Components/WMimages';
import WMtext from './../../Components/WMtext';
import HomeButton from './../../Components/HomeButton';
import BackToTop from './../../Components/BackToTop';

class WarMachine extends Component {
	render() {
		return (
			<div>
				<WMimages />
				<LilyWales color={'rgb(0, 41, 255)'} />
				<WMtext />
				<HomeButton top={'639%'} left={'35%'} />
				<BackToTop top={'636%'} left={'26.5%'} />
			</div>
		);
	}
}

export default WarMachine;

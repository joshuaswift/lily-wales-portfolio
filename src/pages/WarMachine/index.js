import React, { Component } from 'react';
import './WarMachine.css';
import LilyWales from './../../Components/LilyWales';
import WMimages from './../../Components/WMimages';
import WMtext from './../../Components/WMtext';
import HomeButton from './../../Components/HomeButton';

class WarMachine extends Component {
	render() {
		return (
			<div>
				<WMimages />
				<LilyWales color={'rgb(0, 41, 255)'} />
				<WMtext />
				<HomeButton top={'650%'} />
			</div>
		);
	}
}

export default WarMachine;

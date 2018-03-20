import React, { Component } from 'react';
import './WarMachine.css';
import LilyWales from './../../Components/LilyWales';
import WMimages from './../../Components/WMimages';
import WMtext from './../../Components/WMtext';

class WarMachine extends Component {
	render() {
		return (
			<div>
				<WMimages />
				<LilyWales />
				<WMtext />
			</div>
		);
	}
}

export default WarMachine;

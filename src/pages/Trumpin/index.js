import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import HomeButton from './../../Components/HomeButton';
import Trump from './../../Components/Trump';
import './Trumpin.css';

class Trumpin extends Component {
	render() {
		return (
			<div>
				<Trump />
				<LilyWales color="rgb(239,62,54)" />
				<HomeButton color="rgb(238,141,175)" right="5%" />
			</div>
		);
	}
}

export default Trumpin;

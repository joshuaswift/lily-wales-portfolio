import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import BJimages from './../../Components/BJimages';
import BJText from './../../Components/BJText';
import HomeButton from './../../Components/HomeButton';
import './BabyJanes.css';

class BabyJanes extends Component {
	render() {
		return (
			<div>
				<BJimages />
				<BJText />
				<LilyWales color="rgb(255,114,0)" />
				<HomeButton color="rgb(255,114,0)" top="879%" right="44%" />
			</div>
		);
	}
}

export default BabyJanes;

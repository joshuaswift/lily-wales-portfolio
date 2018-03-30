import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import BJimages from './../../Components/BJimages';
import './BabyJanes.css';

class BabyJanes extends Component {
	render() {
		return (
			<div>
				<BJimages />
				<LilyWales color="rgb(255,114,0)" />
			</div>
		);
	}
}

export default BabyJanes;

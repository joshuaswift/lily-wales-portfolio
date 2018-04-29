import React, { Component } from 'react';
import './home.css';
import LilyWales from './../../Components/LilyWales';
import HomeImages from './../../Components/HomeImages';

class Home extends Component {
	render() {
		return (
			<div className="App animate-bottom">
				<HomeImages />
				<LilyWales color="rgb(255,71,153)" />
			</div>
		);
	}
}
export default Home;

import React, { Component } from 'react';
import './home.css';
import LilyWales from './../../Components/LilyWales';
import HomeImages from './../../Components/HomeImages';

class Home extends Component {
	render() {
		return (
			<div className="App animate-bottom">
				<HomeImages />
				<LilyWales />
			</div>
		);
	}
}
export default Home;

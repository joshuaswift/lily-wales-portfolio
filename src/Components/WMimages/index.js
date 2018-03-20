import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WMimages.css';
import wm1 from './wm1.jpg';
import wm2 from './wm2.jpg';
import wm3 from './wm3.jpg';
import wm4 from './wm4.jpg';
import wm5 from './wm5.jpg';
import wm6 from './wm6.jpg';
import wm7 from './wm7.jpg';
import wm8 from './wm8.jpg';
import wm9 from './wm9.jpg';
import wm10 from './wm10.jpg';

class WMimages extends Component {
	render() {
		return (
			<div>
				<div className="WMimagesLarge">
					<img className="wm1" src={wm1} alt="War Machine 1" />
					<img className="wm2" src={wm10} alt="War Machine 2" />
					<img className="wm3" src={wm2} alt="War Machine 3" />
					<img className="wm4" src={wm5} alt="War Machine 5" />
					<img className="wm5" src={wm9} alt="War Machine 9" />
					<img className="wm6" src={wm8} alt="War Machine 8" />
					<img className="wm7" src={wm4} alt="War Machine 4" />
					<img className="wm8" src={wm7} alt="War Machine 7" />
					<img className="wm9" src={wm3} alt="War Machine 3" />
					<img className="wm10" src={wm6} alt="War Machine 6" />
				</div>
				<Link to="/">HOME</Link>
			</div>
		);
	}
}

export default WMimages;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WMimages.css';
import wm1 from './wm1.jpg';
import wm23 from './wm2-3.png';
import wm45 from './wm4-5.png';
import wm67 from './wm6-7.png';
import wm89 from './wm8-9.png';
import wm10 from './wm10.jpg';

class WMimages extends Component {
	render() {
		return (
			<div>
				<div className="WMimagesLarge">
					<img className="wm1" src={wm1} alt="War Machine 1" />
					<img className="wm2-3" src={wm23} alt="War Machine 2 & 3" />
					<img className="wm4-5" src={wm45} alt="War Machine 4 & 5" />
					<img className="wm6-7" src={wm67} alt="War Machine 6 & 7" />
					<img className="wm8-9" src={wm89} alt="War Machine 8 & 9" />
					<img className="wm10" src={wm10} alt="War Machine 10" />
				</div>
				<Link to="/">HOME</Link>
			</div>
		);
	}
}

export default WMimages;

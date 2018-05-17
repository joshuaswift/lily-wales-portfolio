import React, { Component } from 'react';
import './RhondaImages.css';
import rhonda1 from './r1.jpg';
import rhonda23 from './r2-3.png';
import rhonda2 from './r2.jpg';
import rhonda3 from './r3.jpg';
import rhonda4 from './r4.jpg';
import rhonda5 from './r5.jpg';
import rhonda6 from './r6.jpg';

class RhondaImages extends Component {
	render() {
		return (
			<div className="wrapper">
				<img className="rhonda1" src={rhonda1} alt="Radioactive Rhonda!" />
				<img className="rhonda2-3" src={rhonda23} alt="Radioactive Rhonda!" />
				<img className="rhonda2" src={rhonda2} alt="Radioactive Rhonda!" />
				<img className="rhonda3" src={rhonda3} alt="Radioactive Rhonda!" />
				<img className="rhonda4" src={rhonda4} alt="Radioactive Rhonda!" />
				<img className="rhonda5" src={rhonda5} alt="Radioactive Rhonda!" />
				<img className="rhonda6" src={rhonda6} alt="Radioactive Rhonda!" />
			</div>
		);
	}
}

export default RhondaImages;

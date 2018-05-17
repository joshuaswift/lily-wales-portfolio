import React, { Component } from 'react';
import './PhormContent.css';
import p1 from './phorm.jpg';
import p23 from './phorm2-3.png';
import p2 from './phorm2.jpg';
import p3 from './phorm3.jpg';
import p4 from './phorm4.jpg';
import p5 from './phorm5.jpg';
import p6 from './phorm6.jpg';

class PhormContent extends Component {
	render() {
		return (
			<div className="wrapper">
				<img className="phorm1" src={p1} alt="Phorm" />
				<img className="phorm2-3" src={p23} alt="Phorm" />
				<img className="phorm2" src={p2} alt="Phorm" />
				<img className="phorm3" src={p3} alt="Phorm" />
				<img className="phorm4" src={p4} alt="Phorm" />
				<img className="phorm5" src={p5} alt="Phorm" />
				<img className="phorm6" src={p6} alt="Phorm" />
				<p className="location">
					Location:<br />Salford Circus <br />
					<br />
					Photo credit:<br />Tom Bird <br />
				</p>
			</div>
		);
	}
}

export default PhormContent;

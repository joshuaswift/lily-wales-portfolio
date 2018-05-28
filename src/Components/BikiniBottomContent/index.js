import React, { Component } from 'react';
import './BikiniBottomContent.css';
import bb1 from './bb1.jpg';
import bb2 from './bb2.jpg';
import bb34 from './bb3-4.png';
import bb3 from './bb3.jpg';
import bb4 from './bb4.png';
import bb5 from './bb5.png';
import bb6 from './bb6.jpg';
import bb56 from './bb5-6.png';
import bb7 from './bb7.jpg';
import bb8 from './bb8.jpg';
import bb9 from './bb9.jpg';
import bb89 from './bb8-9.png';
import bb10 from './bb10.png';
import bb11 from './bb11.jpg';
import bb12 from './bb12.jpg';
import bb1112 from './bb11-12.png';

class BikiniBottomContent extends Component {
	render() {
		return (
			<div>
				<div className="wrapper">
					<img className="bb1" src={bb1} alt="Bikini Bottom" />
					<img className="bb2" src={bb2} alt="Bikini Bottom" />
					<img className="bb3-4" src={bb34} alt="Bikini Bottom" />
					<img className="bb5-6" src={bb56} alt="Bikini Bottom" />
					<img className="bb3" src={bb3} alt="Bikini Bottom" />
					<img className="bb4" src={bb4} alt="Bikini Bottom" />
					<img className="bb5" src={bb5} alt="Bikini Bottom" />
					<img className="bb6" src={bb6} alt="Bikini Bottom" />
					<img className="bb7" src={bb7} alt="Bikini Bottom" />
					<img className="bb8" src={bb8} alt="Bikini Bottom" />
					<img className="bb9" src={bb9} alt="Bikini Bottom" />
					<img className="bb8-9" src={bb89} alt="Bikini Bottom" />
					<img className="bb10" src={bb10} alt="Bikini Bottom" />
					<img className="bb11" src={bb11} alt="Bikini Bottom" />
					<img className="bb12" src={bb12} alt="Bikini Bottom" />
					<img className="bb11-12" src={bb1112} alt="Bikini Bottom" />
					<p className="BBdescript">
						A series exploring<br /> the mutated marine<br /> life left behind
						by<br /> the 23 atomic tests<br /> at Bikini Atoll<br /> between
						1946 and<br /> 1958.
					</p>
				</div>
			</div>
		);
	}
}

export default BikiniBottomContent;

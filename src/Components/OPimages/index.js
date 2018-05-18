import React, { Component } from 'react';
import './OPimages.css';
import op1 from './op1.png';
import op2 from './op2.png';
import op3 from './op3.png';
import op4 from './op4.png';
import op5 from './op5.png';

class OPimages extends Component {
	render() {
		return (
			<div className="wrapper">
				<img className="mrManhatten" src={op1} alt="Mr Manhatten" />
				<img className="mrPlumbob" src={op2} alt="Mr Plumbob" />
				{/* <img className="fatMan" src={op3} alt="Fat Man & Thin Man" /> */}
				<img className="annie" src={op4} alt="Annie & Grable" />
				<img className="gilda" src={op5} alt="Gilda" />
			</div>
		);
	}
}

export default OPimages;

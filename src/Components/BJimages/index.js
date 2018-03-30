import React, { Component } from 'react';
import './BJimages.css';
import bj1 from './bj1.png';
import bj24 from './bj2-4.png';
import bj57 from './bj5-7.png';
import bj89 from './bj8-9.png';
import bj1012 from './bj10-12.png';
import bj1314 from './bj13-14.png';
import bj1416 from './bj14-16.png';
import bj1718 from './bj17-18.png';

class BJimages extends Component {
	render() {
		return (
			<div className="wrapper">
				<img
					className="bj1"
					src={bj1}
					alt="What ever happened to all the Baby Janes?"
				/>
				<img
					className="bj2-4"
					src={bj24}
					alt="What ever happened to all the Baby Janes?"
				/>
				<img
					className="bj5-7"
					src={bj57}
					alt="What ever happened to all the Baby Janes?"
				/>
				<img
					className="bj8-9"
					src={bj89}
					alt="What ever happened to all the Baby Janes?"
				/>
				<img
					className="bj10-12"
					src={bj1012}
					alt="What ever happened to all the Baby Janes?"
				/>
				<img
					className="bj13-14"
					src={bj1314}
					alt="What ever happened to all the Baby Janes?"
				/>

				<img
					className="bj14-16"
					src={bj1416}
					alt="What ever happened to all the Baby Janes?"
				/>
				<img
					className="bj17-18"
					src={bj1718}
					alt="What ever happened to all the Baby Janes?"
				/>
			</div>
		);
	}
}

export default BJimages;

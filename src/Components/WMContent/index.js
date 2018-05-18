import React, { Component } from 'react';
import './WMimages.css';
import wm1 from './wm1.jpg';
import wm23 from './wm2-3.png';
import wm2 from './wm2.jpg';
import wm3 from './wm3.jpg';
import wm45 from './wm4-5.png';
import wm4 from './wm4.jpg';
import wm5 from './wm5.jpg';
import wm67 from './wm6-7.png';
import wm6 from './wm6.jpg';
import wm7 from './wm7.jpg';
import wm89 from './wm8-9.png';
import wm8 from './wm8.jpg';
import wm9 from './wm9.jpg';
import wm10 from './wm10.jpg';

class WMContent extends Component {
	render() {
		return (
			<div className="WMimagesLarge">
				<img className="wm1" src={wm1} alt="War Machine 1" />
				<img className="wm2" src={wm2} alt="War Machine 1" />
				<img className="wm3" src={wm3} alt="War Machine 1" />
				<img className="wm2-3" src={wm23} alt="War Machine 2 & 3" />
				<img className="wm4-5" src={wm45} alt="War Machine 4 & 5" />
				<img className="wm4" src={wm4} alt="War Machine 1" />
				<img className="wm5" src={wm5} alt="War Machine 1" />
				<img className="wm6-7" src={wm67} alt="War Machine 6 & 7" />
				<img className="wm6" src={wm6} alt="War Machine 1" />
				<img className="wm7" src={wm7} alt="War Machine 1" />
				<img className="wm8-9" src={wm89} alt="War Machine 8 & 9" />
				<img className="wm8" src={wm8} alt="War Machine 1" />
				<img className="wm9" src={wm9} alt="War Machine 1" />
				<img className="wm10" src={wm10} alt="War Machine 10" />
				<div className="wmWrapper">
					<p className="wmDescription">
						In this series the<br />
						notion of war is<br />explored through<br />the juxtaposition<br />
						of predatory<br />
						instinct and the<br />need for survival.<br />Selected artworks
						<br />
						exhibited at The<br />
						Photographers<br />Wall & Argentea<br />Gallery.
					</p>
					<p className="wmDescriptionMobile">
						In this series the notion<br />of war is explored<br /> through the
						juxtaposition<br />
						of predatory instinct and<br /> the need for survival.<br />Selected
						artworks
						<br />
						exhibited at The<br />
						PhotographersWall &<br /> Argentea Gallery.
					</p>
				</div>
			</div>
		);
	}
}

export default WMContent;

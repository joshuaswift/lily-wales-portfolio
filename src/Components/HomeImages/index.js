import React, { Component } from 'react';
import './HomeImages.css';
import rhondaHomeImg from './rhondaHome.png';
import plumbobHomeImg from './operationPlumbobHome.png';

//you wana show the image
//show text
//change text hover colour
//show image on hover

//image is a prop and changes state when title is hovered

const styles = {
	homeImg: {
		position: 'absolute',
		height: '100vh',
		left: '0%'
	}
};

class HomeImages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		};
	}

	onEnter = () => {
		this.setState(prevState => ({
			active: true
		}));
	};

	onLeave = () => {
		this.setState(prevState => ({
			active: false
		}));
	};
	render() {
		return (
			<div>
				<div className="homeImagesWrapper">
					<img
						className={this.state.active ? '' : 'visible'}
						style={styles.homeImg}
						src={rhondaHomeImg}
						alt="Radioactive Rhonda!"
					/>
					<img
						className={this.state.active ? '' : 'visible'}
						style={styles.homeImg}
						src={plumbobHomeImg}
						alt="Operation Plumbob"
					/>
				</div>
				<div className="titlesTextBox">
					<h2
						onMouseEnter={this.onEnter}
						onMouseLeave={this.onLeave}
						className="rhondaTitle"
						alt="Radioactive Rhonda!"
					>
						RADIOACTIVE RHONDA!
					</h2>
					<h2
						className="babyJanesTitle"
						alt="What ever happended to all the Baby Janes?"
					>
						WHAT EVER HAPPENDED AT ALL THE BABY JANES?
					</h2>
					<h2 className="bomTitle" alt="Recreational Retina">
						RECREATIONAL RETINA
					</h2>
					<h2 className="plumbobTitle" alt="Operation Plumbob">
						OPERATION PLUMBOB
					</h2>
					<h2 className="LasVaguenessTitle" alt="Las Vaguness">
						LAS VAGUENESS
					</h2>
					<h2 className="nuclearosisTitle" alt="Nuclearosis">
						NUCLEAROSIS
					</h2>
					<h2 className="trumpinTitle" alt="Trumpin">
						TRUMPIN
					</h2>
					<h2 className="phormTitle" alt="Phorm">
						PHORM
					</h2>
					<h2 className="contactTitle" alt="Contact">
						CONTACT
					</h2>
				</div>
				<div className="copyrightBox">
					<h4>All content copyright C 2018</h4>
				</div>
			</div>
		);
	}
}

export default HomeImages;

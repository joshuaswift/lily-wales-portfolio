import React, { Component } from 'react';
import './HomeImages.css';
import rhondaHomeImg from './rhondaHome.png';
import plumbobHomeImg from './operationPlumbobHome.png';
import phormHomeImg from './phormHome.png';
import trumpinHomeImg from './trumpinHome.png';
import nuclearosisHomeImg from './nuclearosisHome.png';

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
			selection: null
		};
	}

	onEnter = item => {
		this.setState(prevState => ({
			selection: item
		}));
	};

	onLeave = () => {
		this.setState(prevState => ({
			selection: null
		}));
	};
	render() {
		const images = [
			//...put the images in here, e.g.
			{ label: 'Operation Plumbob', src: plumbobHomeImg },
			{ label: 'Radioactive Rhonda', src: rhondaHomeImg },
			{ label: 'Phorm', src: phormHomeImg },
			{ label: 'Trumpin', src: trumpinHomeImg },
			{ label: 'Nuclearosis', src: nuclearosisHomeImg }
		];
		return (
			<div>
				<div className="homeImagesWrapper">
					{images
						.filter((selection, index) => {
							if (this.state.selection !== null && this.state.selection >= 0) {
								return this.state.selection === index;
							}
							return true;
						})
						.map(selection => (
							<img
								style={styles.homeImg}
								src={selection.src}
								alt={selection.label}
							/>
						))}
				</div>
				<div className="titlesTextBox">
					{images.map((selection, index) => (
						<h2
							onMouseEnter={() => this.onEnter(index)}
							onMouseLeave={this.onLeave}
							colour={'rgb(0, 0, 0)'}
							className="title"
						>
							{selection.label.toUpperCase()}
						</h2>
					))}
				</div>
				<div className="copyrightBox">
					<h4>All content copyright C 2018</h4>
				</div>
			</div>
		);
	}
}

export default HomeImages;

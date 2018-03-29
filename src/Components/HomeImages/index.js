import React, { Component } from 'react';
import './HomeImages.css';
import rhondaHomeImg from './rhondaHome.png';
import plumbobHomeImg from './operationPlumbobHome.png';
import phormHomeImg from './phormHome.png';
import trumpinHomeImg from './trumpinHome.png';
import babyJanesHomeImg from './babyJaneHome.png';
import warMachineHomeImg from './warMachineHome.png';
import lasVaguenessHomeImg from './lasVaguenessHome.png';
import bomHomeImg from './bomHome.png';
import nuclearosisHomeImg from './nuclearosisHome.png';
import contactHomeImg from './contactHome.png';

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
			//a random item
			selection: null
		};
	}

	onEnter = item => {
		this.setState(prevState => ({
			//the chosen item
			selection: item
		}));
	};

	render() {
		const images = [
			{
				label: 'Operation Plumbob',
				src: plumbobHomeImg,
				className: 'plumbob'
			},
			{
				label: 'Radioactive Rhonda!',
				src: rhondaHomeImg,
				className: 'rhonda'
			},
			{ label: 'Phorm', src: phormHomeImg, className: 'plumbob' },
			{ label: 'Trumpin', src: trumpinHomeImg },
			{ label: 'Las Vagueness', src: lasVaguenessHomeImg },
			{ label: 'War Machine', src: warMachineHomeImg },
			{ label: 'Recreational Retina', src: bomHomeImg },
			{
				label: 'What Ever Happened to all the Baby Janes?',
				src: babyJanesHomeImg
			},
			{ label: 'Nuclearosis', src: nuclearosisHomeImg },
			{ label: 'Contact', src: contactHomeImg }
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
							// colour={'rgb(0, 0, 0)'}
							className={selection.className}
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

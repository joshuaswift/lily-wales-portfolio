import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
import aboutHomeImg from './aboutHome.png';

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
			selection: 0
		};
	}

	onEnter = item => {
		this.setState(prevState => ({
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
			{ label: 'War Machine', src: warMachineHomeImg, path: '/warmachine' },
			{ label: 'Recreational Retina', src: bomHomeImg },
			{
				label: 'What Ever Happened to all the Baby Janes?',
				src: babyJanesHomeImg
			},
			{ label: 'Nuclearosis', src: nuclearosisHomeImg },
			{ label: 'Contact', src: contactHomeImg },
			{ label: 'About', src: aboutHomeImg }
		];

		return (
			<div>
				<div className="homeImagesWrapper">
					{images
						.filter((selection, index) => {
							return this.state.selection === index;
						})
						.map(selection => (
							<img
								style={styles.homeImg}
								src={selection.src}
								alt={selection.label}
								href={selection.href}
							/>
						))}
				</div>
				<div className="titlesTextBox">
					{images.map((selection, index) => (
						<NavLink to={selection.path || '/'}>
							<h2
								onMouseEnter={() => this.onEnter(index)}
								onMouseLeave={this.onLeave}
								className={selection.className}
							>
								{selection.label.toUpperCase()}
							</h2>
						</NavLink>
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

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
// import contactHomeImg from './contactHome.png';
import aboutHomeImg from './aboutHome.png';
import bikiniBottomHomeImg from './bikiniBottomHome.png';

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
				label: 'Radioactive Rhonda!',
				src: rhondaHomeImg,
				className: 'rhondaTitle',
				path: './radioactiverhonda'
			},
			{ label: 'Recreational Retina', src: bomHomeImg, path: '.bom' },
			{ label: 'War Machine', src: warMachineHomeImg, path: '/warmachine' },
			{
				label: 'What Ever Happened to all the Baby Janes?',
				src: babyJanesHomeImg,
				path: './whateverhappenedtoallthebabyjanes'
			},
			{
				label: 'Bikini Bottom',
				src: bikiniBottomHomeImg,
				path: './bikinibottom'
			},
			{
				label: 'Trumpin',
				src: trumpinHomeImg,
				className: 'trumpinTitle',
				path: './trumpin'
			},
			{
				label: 'Phorm',
				src: phormHomeImg,
				className: 'phormTitle',
				path: './phorm'
			},
			{ label: 'Nuclearosis', src: nuclearosisHomeImg, path: './nuclearosis' },
			{
				label: 'Las Vagueness',
				src: lasVaguenessHomeImg,
				className: 'lasVaguenessTitle',
				path: './lasVagueness'
			},
			{
				label: 'Operation Plumbob',
				src: plumbobHomeImg,
				className: 'plumbob',
				path: '/operationplumbob'
			},
			{ label: 'Contact', src: nuclearosisHomeImg, path: 'contact' },
			{ label: 'About', src: aboutHomeImg, path: 'about' }
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
						<NavLink
							to={selection.path || '/'}
							style={{ textDecoration: 'none' }}
						>
							<h3
								onMouseEnter={() => this.onEnter(index)}
								onMouseLeave={this.onLeave}
								className={selection.className}
							>
								{selection.label.toUpperCase()}
							</h3>
						</NavLink>
					))}
				</div>
			</div>
		);
	}
}

export default HomeImages;

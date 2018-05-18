import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const HomeButton = props => {
	const styles = {
		home: {
			position: 'absolute',
			fontSize: '1.5rem',
			color: props.color || 'rgb(0, 41, 255)',
			top: props.top,
			left: props.left,
			right: props.right,
			bottom: props.bottom,
			textDecoration: 'none',
			fontFamily: 'Archivo Black'
		},
		homemobile: {
			position: 'absolute',
			fontSize: '0.8rem',
			color: props.color || 'rgb(0, 41, 255)',
			top: props.top,
			left: props.left,
			right: props.right,
			bottom: props.bottom,
			textDecoration: 'none',
			fontFamily: 'Archivo Black'
		}
	};

	return (
		<div>
			<MediaQuery minWidth={600}>
				<Link to="/" style={styles.home}>
					HOME
				</Link>
			</MediaQuery>
			<MediaQuery maxWidth={599}>
				<Link to="/" style={styles.homemobile}>
					HOME
				</Link>
			</MediaQuery>
		</div>
	);
};

export default HomeButton;

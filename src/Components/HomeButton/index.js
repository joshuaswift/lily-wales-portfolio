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
			fontFamily: 'Archivo Black',
			paddingBottom: props.paddingBottom
		},
		homeipad: {
			position: 'absolute',
			fontSize: '1.1rem',
			color: props.color || 'rgb(0, 41, 255)',
			top: props.top,
			left: props.left,
			right: props.right,
			bottom: props.bottom,
			textDecoration: 'none',
			fontFamily: 'Archivo Black',
			paddingBottom: props.paddingBottom
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
			fontFamily: 'Archivo Black',
			paddingBottom: props.paddingBottom
		}
	};

	return (
		<div>
			<MediaQuery minWidth={900}>
				<Link to="/" style={styles.home}>
					HOME
				</Link>
			</MediaQuery>
			<MediaQuery maxWidth={899} minWidth={601}>
				<Link to="/" style={styles.homeipad}>
					HOME
				</Link>
			</MediaQuery>
			<MediaQuery maxWidth={600}>
				<Link to="/" style={styles.homemobile}>
					HOME
				</Link>
			</MediaQuery>
		</div>
	);
};

export default HomeButton;

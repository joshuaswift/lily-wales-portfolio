import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = props => {
	const styles = {
		home: {
			position: 'absolute',
			fontSize: '1.5rem',
			color: props.color || 'rgb(0, 41, 255)',
			top: props.top,
			left: props.left,
			textDecoration: 'none',
			fontFamily: 'Archivo Black'
		}
	};

	return (
		<div>
			<Link to="/" style={styles.home}>
				HOME
			</Link>
		</div>
	);
};
export default HomeButton;

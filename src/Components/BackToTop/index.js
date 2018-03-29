import React from 'react';
import { Link } from 'react-router-dom';

const BackToTop = props => {
	const styles = {
		backToTop: {
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
			<Link to="/warmachine" style={styles.backToTop}>
				BACK TO TOP
			</Link>
		</div>
	);
};

export default BackToTop;

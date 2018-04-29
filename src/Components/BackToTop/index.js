import React from 'react';

const BackToTop = props => {
	const styles = {
		backToTop: {
			position: 'absolute',
			fontSize: '1.5rem',
			color: props.color || 'rgb(0, 41, 255)',
			top: props.top,
			left: props.left,
			right: props.right,
			textDecoration: 'none',
			cursor: 'pointer',
			fontFamily: 'Archivo Black'
		}
	};

	return (
		<div
			onClick={() => {
				window && window.scrollTo(0, 0);
			}}
			style={styles.backToTop}
		>
			BACK TO TOP
		</div>
	);
};

export default BackToTop;

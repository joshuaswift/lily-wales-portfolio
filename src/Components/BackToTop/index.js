import React from 'react';

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
			<a style={styles.backToTop}>BACK TO TOP</a>
		</div>
	);
};

export default BackToTop;

// componentDidMount() {
//  window.scrollTo(0, 0)
// }

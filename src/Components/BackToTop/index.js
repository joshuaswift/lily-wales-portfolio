import React from 'react';
import MediaQuery from 'react-responsive';

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
		},
		backToTopMobile: {
			position: 'absolute',
			fontSize: '0.75rem',
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
		<div>
			<MediaQuery minWidth={600}>
				<div
					onClick={() => {
						window && window.scrollTo(0, 0);
					}}
					style={styles.backToTop}
				>
					BACK TO TOP
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={599}>
				<div
					onClick={() => {
						window && window.scrollTo(0, 0);
					}}
					style={styles.backToTopMobile}
				>
					BACK TO TOP
				</div>
			</MediaQuery>
		</div>
	);
};

export default BackToTop;

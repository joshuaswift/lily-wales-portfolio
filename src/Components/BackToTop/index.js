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
		backToTopIpad: {
			position: 'absolute',
			fontSize: '1.1rem',
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
			<MediaQuery minWidth={900}>
				<div
					onClick={() => {
						window && window.scrollTo(0, 0);
					}}
					style={styles.backToTop}
				>
					BACK TO TOP
				</div>
			</MediaQuery>
			<MediaQuery minWidth={601} maxWidth={899}>
				<div
					onClick={() => {
						window && window.scrollTo(0, 0);
					}}
					style={styles.backToTopIpad}
				>
					BACK TO TOP
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={600}>
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

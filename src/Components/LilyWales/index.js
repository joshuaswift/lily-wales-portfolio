import React from 'react';

const LilyWales = props => {
	const styles = {
		lilywales: {
			position: 'absolute',
			top: '122px',
			right: '5.5%',
			fontSize: '5.6rem',
			lineHeight: '0',
			margin: '0',
			padding: '0',
			color: props.color || 'rgb(255, 5, 125)'
		}
	};

	return (
		<div>
			<h1 style={styles.lilywales}>LILY WALES</h1>
		</div>
	);
};

export default LilyWales;

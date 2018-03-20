import React, { Component } from 'react';

const styles = {
	lilywales: {
		position: 'absolute',
		top: '2%',
		right: '5.5%',
		fontSize: '5.5rem',
		color: 'rgb(255, 5, 125)'
	}
};

class LilyWales extends Component {
	render() {
		return (
			<div>
				<h1 style={styles.lilywales} alt="LILY WALES">
					LILY WALES
				</h1>
			</div>
		);
	}
}

export default LilyWales;

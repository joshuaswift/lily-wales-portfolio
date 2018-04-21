import React, { Component } from 'react';
import './WMtext.scss';

const styles = {
	wmWrapper: {
		position: 'absolute',
		right: '5.5%',
		top: '35%',
		width: '300px'
	},
	wmDescription: {
		textAlign: 'right',
		color: 'rgb(245, 27, 236)',
		fontSize: '1.5rem'
	},
	wmTitle: {
		position: 'absolute',
		right: '5.5%',
		color: 'rgb(245, 27, 236)',
		top: '107px',
		fontSize: '3.3rem'
	}
};

class WMtext extends Component {
	render() {
		return (
			<div>
				<h1 className="wmTitle" style={styles.wmTitle}>
					WAR MACHINE
				</h1>
				<div className="wmWrapper" style={styles.wmWrapper}>
					<p className="wmDescription" style={styles.wmDescription}>
						In this series the<br />
						notion of war is<br />explored through<br />the juxtaposition<br />
						of predatory<br />
						instinct and the<br />need for survival.<br />Selected artworks
						<br />
						exhibited at The<br />
						Photographers<br />Wall & Argentea<br />Gallery.
					</p>
				</div>
			</div>
		);
	}
}

export default WMtext;

import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

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
		},
		mobilelilywales: {
			position: 'absolute',
			top: '35px',
			right: '5.5%',
			fontSize: '1.6rem',
			lineHeight: '0',
			margin: '0',
			padding: '0',
			color: props.color || 'rgb(255, 5, 125)'
		}
	};
	return (
		<div className="lwWrapper">
			<Link to="/">
				<MediaQuery minWidth={600}>
					<h1 style={styles.lilywales} href={'./'}>
						LILY WALES
					</h1>
				</MediaQuery>
				<MediaQuery maxWidth={599}>
					<h1 style={styles.mobilelilywales} href={'./'}>
						LILY WALES
					</h1>
				</MediaQuery>
			</Link>
		</div>
	);
};
export default LilyWales;

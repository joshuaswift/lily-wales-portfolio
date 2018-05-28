import React from 'react';
import MediaQuery from 'react-responsive';

const ProjectTitle = props => {
	const styles = {
		title: {
			position: 'absolute',
			width: props.width || '70%',
			height: props.height,
			right: '5.5%',
			color: props.color || 'rgb(245, 27, 236)',
			top: props.top || '135px',
			fontSize: '1.9rem',
			textAlign: 'right',
			lineHeight: props.lineHeight || '0'
		},

		mobiletitle: {
			position: 'absolute',
			right: '5.5%',
			color: props.color || 'rgb(245, 27, 236)',
			top: props.top || '36px',
			fontSize: '0.95rem',
			textAlign: 'right',
			lineHeight: props.lineHeight || 0
		},
		ipadtitle: {
			position: 'absolute',
			right: '5.5%',
			color: props.color || 'rgb(245, 27, 236)',
			top: props.top || '64px',
			fontSize: '1.3rem',
			textAlign: 'right',
			lineHeight: props.lineHeight || 0
		}
	};
	return (
		<div>
			<MediaQuery minWidth={900}>
				<div style={styles.title}>
					<h1>{props.title.toUpperCase()}</h1>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={601} maxWidth={899}>
				<div style={styles.ipadtitle}>
					<h1>{props.title.toUpperCase()}</h1>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={600}>
				<div style={styles.mobiletitle}>
					<h1>{props.title.toUpperCase()}</h1>
				</div>
			</MediaQuery>
		</div>
	);
};

export default ProjectTitle;

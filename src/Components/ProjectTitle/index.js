import React from 'react';
import MediaQuery from 'react-responsive';

const ProjectTitle = props => {
	const styles = {
		title: {
			position: 'absolute',
			width: '70%',
			right: '5.5%',
			color: props.color || 'rgb(245, 27, 236)',
			top: '135px',
			fontSize: '1.9em',
			textAlign: 'right',
			lineHeight: props.lineHeight || '0'
		},
		mobiletitle: {
			position: 'absolute',
			right: '5.5%',
			color: props.color || 'rgb(245, 27, 236)',
			top: props.top || '36px',
			fontSize: '0.95em',
			textAlign: 'right',
			lineHeight: props.lineHeight || 0
		}
	};
	return (
		<div>
			<MediaQuery minWidth={600}>
				<div style={styles.title}>
					<h1>{props.title.toUpperCase()}</h1>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={599}>
				<div style={styles.mobiletitle}>
					<h1>{props.title.toUpperCase()}</h1>
				</div>
			</MediaQuery>
		</div>
	);
};

export default ProjectTitle;

import React from 'react';

const ProjectTitle = props => {
	const styles = {
		title: {
			position: 'absolute',
			right: '5.5%',
			color: props.color || 'rgb(245, 27, 236)',
			top: '102px',
			fontSize: '1.9em',
			textAlign: 'right'
		}
	};
	return (
		<div style={styles.title}>
			<h1>{props.title.toUpperCase()}</h1>
		</div>
	);
};

export default ProjectTitle;

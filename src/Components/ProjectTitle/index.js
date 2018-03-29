import React from 'react';

const ProjectTitle = props => {
	const styles = {
		title: {
			position: 'absolute',
			right: '5.5%',
			color: props.color || 'rgb(245, 27, 236)',
			top: '107px',
			fontSize: '3.3rem'
		},
		titles: [
			'Operation Pumbob',
			'Radioactive Rhonda',
			'Phorm',
			'Trumpin',
			'Las Vagueness',
			'War Machine',
			'Contact',
			'What ever happened to all the Baby Janes?',
			'Recreational Retina',
			'Nuclearosis'
		]
	};

	return (
		<div style={styles.title}>
			<h1>{props.title}</h1>
		</div>
	);
};

export default ProjectTitle;

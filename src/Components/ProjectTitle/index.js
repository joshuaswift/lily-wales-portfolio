import React from 'react';

const ProjectTitle = props => {
	const styles = {
		Title: {
			position: 'absolute',
			right: '5.5%',
			color: 'rgb(245, 27, 236)',
			top: '107px',
			fontSize: '3.3rem'
		},
		titles: ['Operation Pumbob', 'Radioactive Rhonda', 'Phorm', 'Trumpin']
	};

	return (
		<div>
			<h1>{props.titles}</h1>
		</div>
	);
};

export default ProjectTitle;

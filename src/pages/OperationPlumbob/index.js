import React, { Component } from 'react';
import './OperationPlumbob.css';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import OPimages from './../../Components/OPimages';
//
// titles.map(title => <ProjectTitle title={title}/>)

class OperationPlumbob extends Component {
	render() {
		return (
			<div>
				<OPimages />
				<LilyWales color="rgb(255,32,32)" />
			</div>
		);
	}
}

export default OperationPlumbob;

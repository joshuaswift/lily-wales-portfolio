import React, { Component } from 'react';
import './OperationPlumbob.css';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import OPimages from './../../Components/OPimages';

class OperationPlumbob extends Component {
	render() {
		return (
			<div>
				<OPimages />
				<LilyWales />
			</div>
		);
	}
}

export default OperationPlumbob;

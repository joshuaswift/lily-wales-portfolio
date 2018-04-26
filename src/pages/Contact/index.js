import React, { Component } from 'react';
import LilyWales from './../../Components/LilyWales';
import ProjectTitle from './../../Components/ProjectTitle';
import BackToTop from './../../Components/BackToTop';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div>
				<div>
					<ProjectTitle title="Contact" />
					<LilyWales />
				</div>
			</div>
		);
	}
}

export default Contact;

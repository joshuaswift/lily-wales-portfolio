import React, { Component } from 'react';
import './WarMachine.css';
import LilyWales from './../../Components/LilyWales';
import WMContent from './../../Components/WMContent';
import HomeButton from './../../Components/HomeButton';
import BackToTop from './../../Components/BackToTop';
import ProjectTitle from './../../Components/ProjectTitle';
import MediaQuery from 'react-responsive';

class WarMachine extends Component {
	render() {
		return (
			<div>
				<WMContent />
				<ProjectTitle title="War Machine" color="rgb(245, 27, 236)" />
				<LilyWales color={'rgb(0, 41, 255)'} />

				<MediaQuery minWidth={900}>
					<HomeButton top={'647%'} right={'5.5%'} paddingBottom={'12px'} />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={899} minWidth={601}>
					<HomeButton top={'530%'} right={'5.5%'} paddingBottom={'20px'} />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<HomeButton top={'639%'} right={'5.5%'} paddingBottom={'8px'} />{' '}
				</MediaQuery>
				<MediaQuery minWidth={900}>
					<BackToTop top={'643%'} right={'5.5%'} />{' '}
				</MediaQuery>
				<MediaQuery minWidth={601} maxWidth={899}>
					<BackToTop top={'526%'} right={'5.5%'} />{' '}
				</MediaQuery>
				<MediaQuery maxWidth={600}>
					<BackToTop top={'636%'} right={'5.5%'} />{' '}
				</MediaQuery>
			</div>
		);
	}
}

export default WarMachine;

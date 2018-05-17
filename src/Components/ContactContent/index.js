import React, { Component } from 'react';
import './ContactContent.css';
import contactImage from './contactImg.jpg';
import twitter from './twitter.png';
import insta from './insta.png';

class ContactContent extends Component {
	render() {
		return (
			<div className="contactImgWrapper">
				<img className="contactImg" src={contactImage} alt="Atomic Annie" />
				<div className="contactWrapper">
					<p>
						Lily Wales produces<br /> buffoonery that bites<br /> featuring
						hypnotic<br />
						horror & low budget<br /> sci-madness with<br /> that radioactive
						glow.
					</p>
				</div>
				<div class="contacts">
					<div className="email">
						<p>lily.walesoutlook.com</p>
						<img
							className="twitter"
							src={twitter}
							alt="twitter"
							href="https://www.twitter.com/lilywales"
						/>
						<img
							className="insta"
							src={insta}
							alt="instagram"
							href="https://www.instagram.com/lilywales"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactContent;

import React, { Component } from 'react';
import './rhondaText.css';

class RText extends Component {
	render() {
		return (
			<div>
				<div className="RTextWrapper">
					<p>
						Radioactive Rhonda! is a<br /> hyperreal parody of<br /> Gadget, the
						bomb device
						<br />used in the first nuclear <br /> test Trinity (1945).<br />{' '}
						Mirroring the scale of<br /> Gadget at 6 foot, her<br /> simulation
						threatens the<br /> difference between true<br /> and false, symtoms
						of<br /> placebo soon emerge in<br /> her presence. Rhonda<br />{' '}
						proves the truth is often<br /> stranger than fiction. Her<br />{' '}
						name seamlessly slips<br /> into the US government’s<br /> portfolio
						of weaponry
						<br />names, alongside Atomic <br />Annie, Mr Plumbob,<br /> Romeo
						and Smokey to<br /> name a few.
					</p>
				</div>
				<p className="photo-credit">
					Also exhibited<br />Airspace<br />Gallery,<br />Stoke-on-Trent<br />
					<br />
					Photo credit:<br />Murdock<br />
				</p>
			</div>
		);
	}
}

export default RText;

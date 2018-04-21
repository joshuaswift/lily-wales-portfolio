import React, { Component } from 'react';
import './OPText.css';

const styles = {
	oPTitles: {
		position: 'absolute',
		color: 'rgb(255,32,32)'
	}
};

class OPText extends Component {
	render() {
		return (
			<div>
				<div className="OPTextWrapper">
					<p>
						{' '}
						5, 4, 3, 2, 1. They were<br />just words. One<br /> American town
						looks<br />
						like any other. Hard<br /> words. Trash and litter<br /> disfigure
						the house and
						<br />yard. Strange medical<br /> words. Moments tick<br /> away as
						we await the<br /> bomb. But still just<br /> words. The house on<br />{' '}
						the right an eyesore.<br /> Gestational<br /> trophoblastic
						neoplasia.<br /> In a moment you’ll see<br />
						the results of atomic<br /> heat and blast on this<br /> house. We
						hadn’t been
						<br />planning a boy. It’s dry<br /> and rotten. It could be<br />{' '}
						ectopic. The light flash.<br /> the heat wave and the<br /> clouds
						of dust. Cancer.<br /> Then the blast. The<br /> sperm knocked the<br />{' '}
						nucleus out of my egg.<br /> The house in the middle
						<br />still stands. No baby<br /> had formed. Trim your<br />{' '}
						shrubbery. The chemo<br />
						dislodged the tumour.<br /> Beauty, cleanliness,<br /> health and
						safety are<br /> the four basic doctrines<br /> that protect our
						homes,<br /> our cities. Then a loud<br />
						splash in the toilet. I’d<br /> given birth to a tumour.
					</p>
				</div>
				<h3 style={styles.oPTitles} className="manhattenTitle">
					Mr Manhatten
				</h3>
				<h3 style={styles.oPTitles} className="plumTitle">
					Mr Plumbob
				</h3>
				<h3 style={styles.oPTitles} className="fatTitle">
					Fat man & Thin man
				</h3>
				<h3 className="annieTitle">Annie & Grable</h3>
				<h3 style={styles.oPTitles} className="gildaTitle">
					Gilda
				</h3>
			</div>
		);
	}
}

export default OPText;

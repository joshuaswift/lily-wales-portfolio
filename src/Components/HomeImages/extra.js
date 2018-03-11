//handing in home images as props
const HomeProjectImg = props => (
	<img
		src={`/HomeImages/${props.name}.png`}
		className={props.className}
		alt="Projects intro imagery"
	/>
);

//defining each project with title
const BabyJanesTitle = (
	<h3 className="ProjectTitleHome">
		WHAT EVER HAPPENED TO ALL THE BABY JANES?
	</h3>
);

const BomTitle = (
	<h3 className="ProjectTitleHome">RECREATIONAL RETINA</h3>
);

const LasVaguenessTitle = (
	<h3 className="ProjectTitleHome">LASVAGUENESS</h3>
);

const NuclearosisTitle = (
	<h3 className="ProjectTitleHome">nuclearosis</h3>
);

const OperationPlumbobTitle = (
	<h3 className="ProjectTitleHome">OPERATION PLUMBOB</h3>
);

const PhormTitle = (
	<h3 className="ProjectTitleHome">PHORM</h3>
);

const RhondaTitle = (
	<h3 className="ProjectTitleHome">RADIOACTIVE RHONDA!</h3>
);

const TrumpinTitle = (
	<h3 className="ProjectTitleHome">TRUMPIN</h3>
);

const WarMachineTitle = (
	<h3 className="ProjectTitleHome">WAR MACHINE</h3>
);

const ContactTitle = (
	<h3 className="ProjectTitleHome">CONTACT</h3>
);


import babyJanesHomeImg from '../../../public/homeImages/babyJanesHome.png';
,
babyJanesHome: {
  position: 'absolute',
  height: '100%'
}

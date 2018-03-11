//importing page components
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/home';
import RadioactiveRhonda from '../../pages/RadioactiveRhonda';
import Contact from '../../pages/Contact';
import Trumpin from '../../pages/Trumpin';
import BabyJanes from '../../pages/BabyJanes';
import Bom from '../../pages/Bom';
import LasVagueness from '../../pages/LasVagueness';
import Phorm from '../../pages/Phorm';
import OperationPlumbob from '../../pages/OperationPlumbob';
import Nuclearosis from '../../pages/Nuclearosis';
import WarMachine from '../../pages/WarMachine';

//creating routes for site
const App = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/radioactiverhonda" component={RadioactiveRhonda} />
			<Route path="/contact" component={Contact} />
			<Route path="/trumpin" component={Trumpin} />
			<Route path="/whateverhappenedtoallthebabyjanes" component={BabyJanes} />
			<Route path="/bom" component={Bom} />
			<Route path="/lasvagueness" component={LasVagueness} />
			<Route path="/phorm" component={Phorm} />
			<Route path="/operationplumbob" component={OperationPlumbob} />
			<Route path="/Nuclearosis" component={Nuclearosis} />
			<Route path="/warmachine" component={WarMachine} />
		</Switch>
	</main>
);

export default App;

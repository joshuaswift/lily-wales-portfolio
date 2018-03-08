import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/home';
import radioactiveRhonda from '../../pages/radioactiveRhonda';

const App = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/radioactiverhonda" component={radioactiveRhonda} />
		</Switch>
	</main>
);

export default App;

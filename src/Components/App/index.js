import React, { Component } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";

class App extends Component {
	render() {
		return <Route exact path="/" component={Home} />;
	}
}

export default App;

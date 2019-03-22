import React, { Component } from "react";
import "./App.css";
import Header from "./components/Navbar";
import Map from "./components/Map";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="App">
					<Map />
				</div>
			</div>
		);
	}
}

export default App;

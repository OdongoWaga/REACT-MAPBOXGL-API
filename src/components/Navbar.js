import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";

class Header extends Component {
	render() {
		return (
			<Navbar brand="MapboxGL" right style={{ paddingLeft: "10px" }}>
				<NavItem onClick={() => console.log("test click")}>About</NavItem>
				<NavItem href="#">Map</NavItem>
			</Navbar>
		);
	}
}

export default Header;

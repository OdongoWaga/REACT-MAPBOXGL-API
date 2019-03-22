import React, { Component } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";

const TOKEN =
	"pk.eyJ1Ijoid2FnYSIsImEiOiJjanRrYmpob3kxMXk2NDRscWx6ZmhnYm42In0.YmvGsjlNuwrhISgXMwwBbg";

const navStyle = {
	position: "absolute",
	top: 0,
	left: 0,
	padding: "20px"
};

class Map extends Component {
	state = {
		viewport: {
			width: 600,
			height: 450,
			latitude: 37.7577,
			longitude: -122.4376,
			zoom: 8
		}
	};

	render() {
		const { viewport } = this.state;
		return (
			<ReactMapGL
				style={{ textAlign: "left" }}
				{...viewport}
				onViewportChange={(viewport) => this.setState({ viewport })}
				mapStyle="mapbox://styles/mapbox/dark-v9"
				mapboxApiAccessToken={TOKEN}
			>
				<div className="nav" style={navStyle}>
					<NavigationControl
						onViewportChange={(viewport) => this.setState({ viewport })}
					/>
				</div>
			</ReactMapGL>
		);
	}
}

export default Map;

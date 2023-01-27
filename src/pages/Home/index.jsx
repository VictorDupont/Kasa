import React from "react";

import Banner from "../../components/Banner";
import ContainerRentals from "../../components/ContainerRentals";

import "./index.css";

function Home() {
	return (
		<React.Fragment>
		<section style={{ margin: "0px 15px"}}>
			<div className="container1440">
				<Banner backgroundImage="https://i.imgur.com/3aQLApE.jpg" title="Chez vous, partout et ailleurs"/>
				<ContainerRentals />
			</div>
		</section>
		</React.Fragment>
	);
}

export default Home;

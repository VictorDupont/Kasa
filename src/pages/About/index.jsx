import React from "react";

import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";

import about from "../../data/about.json";

import "./index.css";

function About() {
	return (
		<React.Fragment>
			<section style={{minHeight: "calc(100vh - 152px - 192px", margin: "0px 15px"}}>
			<div className="container1440 about-space">
				<Banner backgroundImage="https://i.imgur.com/ywj7ZIv.jpg" title={null} />
				<div className="about-space2"></div>
				<Dropdown title={about[0].title} description={about[0].description} key={about[0].id} expanded={true} />
				<Dropdown title={about[1].title} description={about[1].description} key={about[1].id} expanded={false} />
				<Dropdown title={about[2].title} description={about[2].description} key={about[2].id} expanded={false} />
				<Dropdown title={about[3].title} description={about[3].description} key={about[3].id} expanded={false} />
			</div>
		</section>
		</React.Fragment>
	);
}

export default About;

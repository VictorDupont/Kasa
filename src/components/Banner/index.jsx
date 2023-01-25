import React from "react";

import "./index.css";

/* Banner */
// backgroundImage: url de la imagen de fond
// title: titre de la bannière

const Banner = ({backgroundImage, title}) => {
	return (
		<div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="background_title">
				<div className="banner__title">{title}</div>
			</div>			
		</div>
	);
};

export default Banner;

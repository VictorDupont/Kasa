import React from "react";

import "./index.css";

/* RentalCard */
// title: titre de la location
// cover: url de l'image de la location
const RentalCard = ({ title, cover }) => {
	return (
		<div className="card">
			<figure className="card__thumbnail">
				<img src={cover} alt={"Image de " + title} />
				<span className="card__title">{title}</span>
			</figure>
		</div>
	);
};

export default RentalCard;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

/* Rating */
// starsNumber: nombre d'étoiles à afficher
const Rating = ({ starsNumber }) => {
    let stars = [];

    // On affiche 5 étoiles
    for (let i = 0; i < 5; i++) {
        // Si l'étoile est inférieure au nombre d'étoiles à afficher, on affiche une étoile pleine
        if (i < starsNumber) {
            stars.push(<FontAwesomeIcon icon={faStarSolid} key={"star-" + i}/>);
        } else { // Sinon on affiche une étoile vide
            stars.push(<FontAwesomeIcon icon={faStar} key={"star-" + i}/>);
        }
    }
    
	return (
		<span className="stars">
            {stars}
        </span>
	);
};

export default Rating;

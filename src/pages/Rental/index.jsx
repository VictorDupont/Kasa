
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Carousel from "../../components/Carousel";
import Dropdown from "../../components/Dropdown";
import Rating from "../../components/Rating";

import rentals from "../../data/rental.json";

import "./index.css";

// console.log([...rentals]);

/* Rental */
function Rental() {
	const { id } = useParams(); // id de la location dans l'url
	const navigate = useNavigate(); // permet de rediriger vers une autre page
	const [error404, setError404] = useState(false); // état de la page 404 (true = affichée, false = non affichée)
	const [isLoading, setIsloading] = useState(true); // état du chargement de la page (true = en cours, false = terminé)
	const [rental, setRental] = useState([...rentals]); // état de la location (tableau vide au départ)

	// Si l'id de la location n'est pas dans le tableau rentals, on affiche la page 404
	useEffect(() => {
				const rental = rentals?.find(rental => rental.id === id);
				if(!rental) {
					setError404(true);
					if(error404) navigate('/404');
				} else { // Sinon on affiche la location
					setRental(rental);
				}
				setIsloading(false);
	}, [id, error404, navigate]);

	// Si la page est en cours de chargement, on affiche "Chargement..."
	if(isLoading) return <p>Chargement...</p>
	
	// Diviser le nom du propriétaire en 2 parties
	const name = rental?.host?.name.split(" ");

	return (
		<React.Fragment>
		<section style={{minHeight: "calc(100vh - 152px - 192px"}}>
			<div className="container1440" style={{ margin: "0 auto"}}>
			<Carousel images={rental?.pictures} className="noselect" />
				{rental &&
				<React.Fragment>
					<div className="container-primary-infos">
						<div className="container-primary-infos-left">
							<h1 className="rental-name">{rental?.title}</h1>
							<h2 className="rental-location">{rental?.location}</h2>
							<span className="tags">{rental?.tags?.map((tag, index) => <li key={"tag-" + index}>{tag}</li>)}</span>
						</div>
						<div className="container-primary-infos-right">
							<div className="host"><div className="name"><span className="firstname">{name?.[0]}</span><span className="lastname">{name?.[1]}</span></div><img src={rental?.host?.picture} alt={rental?.host?.name} /></div><br />
							<Rating starsNumber={rental?.rating} />
						</div>
					</div>
				
				<div className="container-dropdowns">
					<Dropdown title="Description" description={rental?.description} expanded={true}/>
					<Dropdown title="Équipements" description={rental?.equipments?.map((equipment, index) => <li key={"equipment-" + index}>{equipment}</li>)} expanded={true}/>
				</div>
				</React.Fragment>
				}
			</div>
		</section>
		</React.Fragment>
	);
}

export default Rental;

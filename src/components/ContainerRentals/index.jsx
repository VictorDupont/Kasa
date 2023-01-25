import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import RentalCard from "../../components/RentalCard";
import rental from "../../data/rental.json";

const ContainerRentals = () => {
	return (
		<div className="container-rentals"
		>
			{/* Affiche les 6 premiers éléments du tableau rental.json */}
			{rental.slice(0, 6).map((rental) => (
				<Link to={`rental/${rental.id}`} key={rental.id} className="cardc">
					<RentalCard title={rental.title} cover={rental.cover} key={rental.id} />
				</Link>
			))}
		</div>
	);
};

export default ContainerRentals;

import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

/* Dropdown */
// title: titre du dropdown
// description: description du dropdown
// expanded: état du dropdown (ouvert ou fermé)
const Dropdown = ({title, description, expanded}) => {
  // état du dropdown (ouvert ou fermé)
  const [isOpen, setOpen] = React.useState(false);

  // fonction qui permet de changer l'état du dropdown
  const toggle = () => {
    setOpen(!isOpen);
  };

  // Si expanded change, on change l'état du dropdown
  useEffect(() => {
    setOpen(expanded);
  }, [expanded]);

	return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={toggle}>
        <h3 className="dropdown__title">{title}</h3>
          <span className="dropdown__icon">{isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </div>
      
      {isOpen && (
        <div className="dropdown__body">
          <p className="dropdown__description">{description}</p>
        </div>
      )}
    </div>  
    );
};

export default Dropdown;

import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

/* Carousel */
// images: array d'url des images
const Carousel = ({images}) => {
    // 
    const [currentImage, setCurrentImage] = React.useState(0);
    const [transitionCarouselImg, setTransitionCarouselImg] = React.useState(true);
    
    /* Next image */
    // Si l'image suivante est la dernière, on revient à la première
    // Sinon on passe à l'image suivante
    const nextImage = () => {
        setTransitionCarouselImg(!transitionCarouselImg);
        if(currentImage < images?.length - 1) setCurrentImage(currentImage + 1);
        else setCurrentImage(0);
    };

    /* Previous image */
    // Si l'image précédente est la première, on revient à la dernière
    // Sinon on passe à l'image précédente
    const previousImage = () => {
        setCurrentImage(currentImage > 0 ? currentImage - 1 : images.length - 1);
    };

    /* Images number */
    // Vérifie si il y a plus d'une image
    const imagesNumber = () => images?.length > 1;

    /* Carousel interval */
    // Si il y a plus d'une image, on lance un interval de 5 secondes
    // Sinon on arrête l'interval
    useEffect(() => {
        if(imagesNumber()) {
            const interval = setInterval(() => {
                nextImage();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [currentImage, imagesNumber]);

	return (
    <div className="carousel">
        <div className="carousel__images">
            <img src={images?.[currentImage]} alt="carousel" className="active" />
            {// Si il y a plus d'une image, on affiche l'image suivante
            }
            {imagesNumber() && <div className="carousel__images__buttons">
                <FontAwesomeIcon icon={faChevronLeft} onClick={previousImage}  className="chevron-previous"/>
                <FontAwesomeIcon icon={faChevronRight} onClick={nextImage} className="chevron-next"/>
                <span className="current-image-position">{currentImage + 1}/{images?.length}</span>
            </div>}
            
        </div>
    </div>
    );
};

export default Carousel;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import image1 from "../images/thelast.jpg";
import image2 from "../images/uncharted4.jpg";

function Carrouselle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2];

  const changeImage = (direction) =>
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + images.length) % images.length
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-1 gap-4 px-2">
      <div className="mb-4 text-center">
        <p className="text-sm md:text-lg lg:text-xl">
          Plongez au cœur de l'action et débloquez un nouveau monde de
          possibilités –
          <br />où votre prochaine grande aventure vous attend à chaque clic !
        </p>
      </div>
      <div className="relative w-full max-w-xs md:max-w-lg lg:max-w-4xl mx-auto">
        <div className="overflow-hidden h-64 md:h-80 lg:h-[70vh]">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() => changeImage(-1)}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 lg:p-4 rounded-full"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() => changeImage(1)}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 lg:p-4 rounded-full"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Carrouselle;

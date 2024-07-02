import React from "react";
import { motion } from "framer-motion";
import "../styles/age.css";
import Papalote from "../assets/papalote.png"; // Añade la imagen para infantes
import clickSound from "../assets/click.mp3"; // Importa el sonido de clic

function AgeSelector({ onAgeSelected }) {
  const handleAgeSelection = (age) => {
    const audio = new Audio(clickSound);
    audio.play(); // Reproducir el sonido de clic
    onAgeSelected(age);
  };

  const swingAnimation = {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
    },
  };

  return (
    <div className="age-selection">
      <h1 className="Tittle">Etapa:</h1>
      <div className="image-container-edades">
        <div className="age-image-container">
          <motion.img
            className="age-image-infantes"
            src={Papalote}
            alt="Infantes"
            onClick={() => handleAgeSelection("infantes")}
            animate={swingAnimation}
          />
          <p className="age-label" onClick={() => handleAgeSelection("infantes")}>
            Infantes
          </p>
        </div>
        <div className="age-image-container">
          <motion.img
            className="age-image-adolescentes"
            src={Papalote}
            alt="Adolescentes"
            onClick={() => handleAgeSelection("adolescentes")}
            animate={swingAnimation}
          />
          <p className="age-label" onClick={() => handleAgeSelection("adolescentes")}>
            Adolescentes
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgeSelector;

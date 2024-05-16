import React, { useState } from "react";
import "../styles/age.css";
// En AgeSelector.js
function AgeSelector({ onAgeSelected }) {
  // Añade onAgeSelected como prop

  const handleAgeSelection = (age) => {
    onAgeSelected(age); // Llama a la función pasada por props en lugar de usar el estado local
  };

  return (
    <div className="age-selection">
      <h1 className="Tittle">Rango de edad</h1>

      <div className="button-container">
        <button
          className="age-button"
          onClick={() => handleAgeSelection("infantes")}
        >
          Infantes
        </button>
        <button
          className="age-button"
          onClick={() => handleAgeSelection("adolescentes")}
        >
          Adolescentes
        </button>
      </div>
    </div>
  );
}

export default AgeSelector;

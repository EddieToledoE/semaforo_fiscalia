import React, { useState } from "react";
import "../styles/age.css";
function AgeSelector() {
  const [selectedAge, setSelectedAge] = useState("");

  const handleAgeSelection = (age) => {
    setSelectedAge(age);
  };

  return (
    <div className="age-selection">
      {selectedAge ? null : (
        <>
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
        </>
      )}
      {selectedAge && <p>Edad Elegida: {selectedAge}</p>}
    </div>
  );
}

export default AgeSelector;

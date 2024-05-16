import React, { useState } from "react";
import Nubes from "./components/clouds";
import Highway from "./components/highway";
import Semaforo from "./components/semaforo";
import AgeSelector from "./components/ageSelector";
import Tittle from "./components/tittle";
import { motion } from "framer-motion";
import "./App.css";
import Body from "./components/body";
import Tutorial from "./components/tutorial"; // Importa el componente Tutorial
import Back from "./assets/back.png";

function App() {
  const [selectedAge, setSelectedAge] = useState(""); // Estado para almacenar la edad seleccionada
  const [alertLevel, setAlertLevel] = useState(""); // Estado para almacenar el nivel de alerta
  const [showTutorial, setShowTutorial] = useState(false); // Estado para manejar el tutorial

  const handleAgeSelection = (age) => {
    setSelectedAge(age);
    setShowTutorial(true); // Muestra el tutorial después de seleccionar la edad
  };

  const handleStart = () => {
    setSelectedAge("selecting"); // Usamos un estado intermedio para saber que estamos en selección
  };

  const handleAlert = (level) => {
    setAlertLevel(level); // Función para establecer el nivel de alerta
  };

  const handleReset = () => {
    window.location.reload(); // Recargar la página
  };

  const handleTutorialEnd = () => {
    setShowTutorial(false); // Oculta el tutorial después de que termine
  };

  return (
    <>
      <div>
        <div className="clouds-container">
          <Nubes />
        </div>
        {selectedAge &&
          selectedAge !== "selecting" && ( // Muestra el botón de "Volver al inicio" si se ha seleccionado una edad
            <button className="reset-button" onClick={handleReset}>
              <img className="back-image" src={Back} alt="Regresar al inicio" />
            </button>
          )}
        {!selectedAge && ( // Muestra el título y el botón de inicio si no se ha seleccionado ninguna edad
          <>
            <Tittle />
            <div className="button-container">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="start-button"
                onClick={handleStart}
              >
                Iniciar
              </motion.button>
            </div>
          </>
        )}
        {selectedAge === "selecting" && ( // Muestra el selector de edad si el estado es 'selecting'
          <AgeSelector onAgeSelected={handleAgeSelection} />
        )}
        {showTutorial && <Tutorial onTutorialEnd={handleTutorialEnd} />} //
        Muestra el tutorial si showTutorial es true
        {selectedAge &&
          selectedAge !== "selecting" &&
          !showTutorial && ( // Muestra el componente Body si se ha seleccionado una edad y el tutorial ha terminado
            <Body selectedAge={selectedAge} onAlert={handleAlert} /> // Pasamos la función handleAlert como prop
          )}
        <Highway />
        <Semaforo alertLevel={alertLevel} />{" "}
        {/* Pasamos el nivel de alerta como prop */}
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Nubes from "./components/clouds";
import Highway from "./components/highway";
import Semaforo from "./components/semaforo";
import AgeSelector from "./components/ageSelector";
import Tittle from "./components/tittle";
import { motion } from "framer-motion";
import Logo from "./assets/Logo.png";
import "./App.css";
import Body from "./components/body";
import Tutorial from "./components/tutorial"; // Importa el componente Tutorial
import Back from "./assets/back.png";
import backgroundAudio from "./assets/Inicio.mp3"; // Importa tu archivo de audio

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

  useEffect(() => {
    const audio = new Audio(backgroundAudio);
    audio.loop = true; // Hacer que el audio se repita en bucle

    if (!showTutorial) {
      audio.play(); // Reproducir el audio si no se ha seleccionado la edad
    } else {
      audio.pause(); // Pausar el audio si se ha seleccionado la edad
      audio.currentTime = 0; // Reiniciar el audio
    }

    return () => {
      audio.pause(); // Asegurarse de que el audio se pause si el componente se desmonta
      audio.currentTime = 0; // Reiniciar el audio
    };
  }, [selectedAge]);

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
            <div>
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
              <img className="logo" src={Logo} alt="Logo" />
            </div>
          </>
        )}
        {selectedAge === "selecting" && ( // Muestra el selector de edad si el estado es 'selecting'
          <AgeSelector onAgeSelected={handleAgeSelection} />
        )}
        {showTutorial && (
          <Tutorial onTutorialEnd={handleTutorialEnd} selectedAge={selectedAge} />
        )}
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

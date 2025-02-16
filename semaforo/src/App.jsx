import React, { useState, useEffect } from "react";
import Nubes from "./components/clouds";
import Highway from "./components/highway";
import Semaforo from "./components/semaforo";
import AgeSelector from "./components/ageSelector";
import Tittle from "./components/tittle";
import { motion } from "framer-motion";
import Logo from "./assets/Logo2025.png";
import Up from "./assets/UpLogo.png";
import "./App.css";
import Body from "./components/body";
import Tutorial from "./components/tutorial"; // Importa el componente Tutorial
import Back from "./assets/back.png";
import backgroundAudio from "./assets/Inicio.mp3"; // Importa tu archivo de audio
import clickSound from "./assets/click.mp3"; // Importa el sonido de click

function App() {
  const [selectedAge, setSelectedAge] = useState(""); // Estado para almacenar la edad seleccionada
  const [alertLevel, setAlertLevel] = useState(""); // Estado para almacenar el nivel de alerta
  const [showTutorial, setShowTutorial] = useState(false); // Estado para manejar el tutorial
  const [audio] = useState(new Audio(backgroundAudio)); // Estado para el audio de fondo
  const [audioStarted, setAudioStarted] = useState(false); // Estado para controlar si el audio ha comenzado
  const [tutorialEnded, setTutorialEnded] = useState(false); // Estado para controlar si el tutorial ha terminado

  const handleAgeSelection = (age) => {
    setSelectedAge(age);
    setShowTutorial(true); // Muestra el tutorial después de seleccionar la edad
  };

  const handleStart = () => {
    const clickAudio = new Audio(clickSound);
    clickAudio.play(); // Reproducir el sonido de clic
    if (!tutorialEnded) {
      audio.play(); // Reproducir el audio de fondo si el tutorial no ha terminado
    }
    setSelectedAge("selecting"); // Usamos un estado intermedio para saber que estamos en selección
  };

  const handleInitialStart = () => {
    audio.play(); // Reproducir el audio de fondo
    setAudioStarted(true); // Indicar que el audio ha comenzado
  };

  const handleAlert = (level) => {
    setAlertLevel(level); // Función para establecer el nivel de alerta
  };

  const handleReset = () => {
    window.location.reload(); // Recargar la página
  };

  const handleTutorialEnd = () => {
    setShowTutorial(false); // Oculta el tutorial después de que termine
    setTutorialEnded(true); // Indicar que el tutorial ha terminado
    audio.pause(); // Detener el audio de fondo
    audio.currentTime = 0; // Reiniciar el audio
  };

  useEffect(() => {
    audio.loop = true; // Hacer que el audio se repita en bucle

    return () => {
      audio.pause(); // Asegurarse de que el audio se pause si el componente se desmonta
      audio.currentTime = 0; // Reiniciar el audio
    };
  }, [audio]);

  useEffect(() => {
    if (showTutorial) {
      audio.pause(); // Pausar el audio si se ha seleccionado la edad
      audio.currentTime = 0; // Reiniciar el audio
    } else if (audioStarted && !tutorialEnded) {
      audio.play().catch((e) => console.log(e)); // Intentar reproducir el audio si no se ha seleccionado la edad y ha comenzado el audio
    }
  }, [showTutorial, audio, audioStarted, tutorialEnded]);

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
        {!audioStarted && ( // Muestra el botón de inicio inicial para comenzar el audio
          <>
            <div>
              <Tittle />
              <div className="button-container">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="start-button"
                  onClick={handleInitialStart}
                >
                  ¿Listos?
                </motion.button>
              </div>
              <img className="logo" src={Logo} alt="Logo" />
              <img className="up-logo" src={Up} alt="Up Logo" />
            </div>
          </>
        )}
        {audioStarted &&
          !selectedAge && ( // Muestra el título y el botón de inicio si no se ha seleccionado ninguna edad
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
                    ¡Vamos!
                  </motion.button>
                </div>
                <img className="logo" src={Logo} alt="Logo" />
                <img className="up-logo" src={Up} alt="Up Logo" />
              </div>
            </>
          )}
        {selectedAge === "selecting" && ( // Muestra el selector de edad si el estado es 'selecting'
          <AgeSelector onAgeSelected={handleAgeSelection} />
        )}
        {showTutorial && (
          <Tutorial
            onTutorialEnd={handleTutorialEnd}
            selectedAge={selectedAge}
          />
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

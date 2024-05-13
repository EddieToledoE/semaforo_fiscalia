import React, { useState } from "react";
import Nubes from "./components/clouds";
import Highway from "./components/highway";
import Semaforo from "./components/semaforo";
import AgeSelector from "./components/ageSelector";
import Tittle from "./components/tittle";
import { motion } from "framer-motion";
import "./App.css";
import Body from "./components/body";

function App() {
  const [selectedAge, setSelectedAge] = useState(""); // Estado para almacenar la edad seleccionada
  const [alertLevel, setAlertLevel] = useState(""); // Estado para almacenar el nivel de alerta

  const handleAgeSelection = (age) => {
    setSelectedAge(age); // Función para actualizar la edad seleccionada
  };

  const handleStart = () => {
    setSelectedAge("selecting"); // Usamos un estado intermedio para saber que estamos en selección
  };

  const handleAlert = (level) => {
    setAlertLevel(level); // Función para establecer el nivel de alerta
  };

  return (
    <>
      <div>
        <div className="clouds-container">
          <Nubes />
        </div>
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
        {selectedAge &&
          selectedAge !== "selecting" && ( // Muestra el componente Body si se ha seleccionado una edad
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

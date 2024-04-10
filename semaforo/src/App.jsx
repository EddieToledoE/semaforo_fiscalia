import Nubes from "./components/clouds";
import Highway from "./components/highway";
import AgeSelector from "./components/ageSelector";
import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Body from "./components/body";

function App() {
  const [showAgeSelector, setShowAgeSelector] = useState(false);

  const handleStart = () => {
    setShowAgeSelector(true);
  };

  return (
    <>
      <div>
        <div className="clouds-container">
          <Nubes />
        </div>
        <div className="Tittle-container">
          {/* <h1 className="Big-Tittle">Semáforo</h1>
          <h1 className="Tittle">de un cuerpo seguro</h1> */}
          <div className="button-container">
            {showAgeSelector ? (
              <AgeSelector />
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.9 }}
                className="start-button"
                onClick={handleStart}
              >
                Iniciar
              </motion.button>
            )}
          </div>
        </div>
        <Body />
        <Highway />
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Nube1 from "../assets/Nube1.svg";
import Nube2 from "../assets/Nube2.svg";
import Nube3 from "../assets/Nube3.svg";
import Nube4 from "../assets/Nube4.svg";
import { motion } from "framer-motion";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ajustes individuales para cada nube
  const cloudSettings = [
    { id: 1, yOffset: 100, xOffset: screenWidth },
    { id: 2, yOffset: 110, xOffset: screenWidth - 300 }, // Asumiendo dimensiones específicas
    { id: 3, yOffset: 100, xOffset: screenWidth - 400 },
    { id: 4, yOffset: 120, xOffset: screenWidth - 500 },
  ];

  return (
    <>
      {cloudSettings.map((cloud) => (
        <motion.div
          key={cloud.id}
          initial={{ y: cloud.yOffset, x: -400 }} // Iniciar fuera de la pantalla
          animate={{ x: [0, screenWidth - 100] }} // -100 para asegurar que llegue al final de la pantalla antes de reiniciar
          transition={{
            yoyo: Infinity,
            duration: 20,
            repeat: Infinity,
            transition: 1.5,
          }}
          className={`cloud${cloud.id}-container`}
        >
          <img src={eval(`Nube${cloud.id}`)} alt="" />
        </motion.div>
      ))}
    </>
  );
}

export default App;

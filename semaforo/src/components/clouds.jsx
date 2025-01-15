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

  // Mapa de imágenes
  const cloudImages = {
    1: Nube1,
    2: Nube2,
    3: Nube3,
    4: Nube4,
  };

  // Ajustes individuales para cada nube
  const cloudSettings = [
    { id: 1, yOffset: 0, xOffset: screenWidth },
    { id: 2, yOffset: 30, xOffset: screenWidth - 350 }, // Asumiendo dimensiones específicas
    { id: 3, yOffset: 20, xOffset: screenWidth - 450 },
    { id: 4, yOffset: 15, xOffset: screenWidth - 550 },
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
          <img
            className="clouds_img"
            src={cloudImages[cloud.id]} // Accede a las imágenes del mapa
            alt={`Cloud ${cloud.id}`}
          />
        </motion.div>
      ))}
    </>
  );
}

export default App;

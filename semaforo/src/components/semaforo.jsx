import React, { useEffect, useState } from "react";
import SemaforoN from "../assets/Semaforo.svg"; // Importa la imagen del semáforo
import SemaforoRojo from "../assets/SemaforoRojo.svg"; // Importa la imagen del semáforo rojo
import SemaforoAmarillo from "../assets/SemaforoAmarillo.svg"; // Importa la imagen del semáforo amarillo
import SemaforoNaranja from "../assets/SemaforoNaranja.svg"; // Importa la imagen del semáforo naranja
import { motion } from "framer-motion";
function Semaforo({ alertLevel }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para obtener la imagen del semáforo según el nivel de alerta
  const getSemaforoImage = () => {
    switch (alertLevel) {
      case "red":
        return SemaforoRojo;
      case "yellow":
        return SemaforoAmarillo;
      case "orange":
        return SemaforoNaranja;
      default:
        // Por defecto, mostrar el semáforo original
        return SemaforoN;
    }
  };

  return (
    <>
      <motion.img
        initial={{ x: screenWidth * 0.7, y: 100 }}
        className="semaforo"
        src={getSemaforoImage()} // Usamos la función para obtener la imagen según el nivel de alerta
        alt=""
      />
    </>
  );
}

export default Semaforo;

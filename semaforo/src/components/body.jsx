import React, { useState } from "react";
import "../styles/body.css";
import BodyIMG from "../assets/Cuerpo.svg";
import {motion }from "framer-motion";
function Body({ selectedAge }) {
  // Estado para controlar el mensaje de alerta activo
  const [alertLevel, setAlertLevel] = useState('');

  // Función para establecer el nivel de alerta
  const handleAlert = (level) => {
    setAlertLevel(level);
  };

  // Mensajes por nivel y edad
  const getMessageByAgeAndLevel = (age, level) => {
    const messages = {
      adolescentes: {
        red: "Alerta máxima: Necesitas atención inmediata.",
        orange: "Advertencia: Es recomendable chequear esto.",
        yellow: "Precaución: Mantén vigilancia."
      },
      infantes: {
        red: "¡Uy! Esto parece serio, llama a un adulto.",
        orange: "Ojo aquí, podría necesitar que lo vean.",
        yellow: "Un poco de cuidado con esto."
      }
    };
    return age && level ? messages[age === 'infantes' ? 'infantes' : 'adolescentes'][level] : '';
  };

  return (
    
    <div className="body-container">
    <img className="body-img" src={BodyIMG} alt="" />
    <div className="head" onClick={() => handleAlert('yellow')}/>
    <div className="cuello" onClick={() => handleAlert('orange')}/>
    <div className="pecho" onClick={() => handleAlert('red')}/>
    <div className="bajos" onClick={() => handleAlert('red')}/>
    <div className="pierna-izq" onClick={() => handleAlert('yellow')}/>
    <div className="pierna-der" onClick={() => handleAlert('yellow')}/>
    <div className="mano-der" onClick={() => handleAlert('orange')}/>
    <div className="mano-izq" onClick={() => handleAlert('orange')}/>
    {alertLevel && (
      <motion.div
  className={`alert-message alert-${alertLevel}`}
  initial={{ x: 0, scale: 0 }} // Inicia fuera de la pantalla y con escala 0
  animate={{ x: 0, scale: [1.1, 1.2] }} // Escala de 1 a 1.3 y luego vuelve a 1
  transition={{
    duration: .5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1
  }}
>
        {getMessageByAgeAndLevel(selectedAge, alertLevel)}
      </motion.div>
    )}
  </div>
  );
}

export default Body;

import React, { useState, useEffect } from "react";
import "../styles/body.css";
import BodyIMG from "../assets/Cuerpo.svg";
import { motion } from "framer-motion";
import alertAudioRed from "../assets/Rojo.mp3";
import alertAudioOrange from "../assets/Naranja.mp3";
import alertAudioYellow from "../assets/Verde.mp3";

function Body({ selectedAge, onAlert }) {
  const [alertLevel, setAlertLevel] = useState("");
  const [resetAnimation, setResetAnimation] = useState(0); // Estado para forzar el reset de la animación

  useEffect(() => {
    // Preload audio files
    const redAudio = new Audio(alertAudioRed);
    const orangeAudio = new Audio(alertAudioOrange);
    const yellowAudio = new Audio(alertAudioYellow);
    
    // Function to preload audios
    const preloadAudios = () => {
      redAudio.load();
      orangeAudio.load();
      yellowAudio.load();
    };
    
    preloadAudios();
  }, []);

  const handleAlert = (level) => {
    setAlertLevel(level);
    onAlert(level);
    playAlertAudio(level);
    setResetAnimation((prev) => prev + 1); // Actualiza el estado para forzar el reset de la animación
  };

  const getMessageByAgeAndLevel = (age, level) => {
    const messages = {
      adolescentes: {
        red: "Tus partes privadas, son solo tuyas y nadie tiene derecho a tocarlas sin tu consentimiento. Si alguien cruza esta línea o te hace sentir en peligro, busca ayuda de inmediato y habla con alguien de confianza sobre lo que sucedió.",
        orange:
          "Si alguien intenta tocarte en lugares que te hacen sentir incómodo o vulnerado, es crucial establecer límites claros. Di 'No' firmemente y busca apoyo en un adulto de confianza o en recursos de ayuda.",
        yellow:
          "Es importante respetar tu cuerpo y tu privacidad. No permitas que nadie toque las partes de tu cuerpo que están descubiertas por la ropa, sin tu permiso.",
      },
      infantes: {
        red: "Nunca dejes que nadie toque tus partes privadas, sin tu permiso. Si alguien trata de hacerlo o te hace sentir mal, busca ayuda de un adulto de inmediato.",
        orange:
          "Si alguien intenta tocar partes de tu cuerpo que están cubiertas, dile 'No' y cuéntale a un adulto de confianza si te sientes incómodo.",
        yellow:
          "No está bien que alguien toque las partes descubiertas por tu ropa. Es importante mantenerlas seguras y privadas.",
      },
    };
    return age && level
      ? messages[age === "infantes" ? "infantes" : "adolescentes"][level]
      : "";
  };

  const playAlertAudio = (level) => {
    let audioSrc;
    switch (level) {
      case "red":
        audioSrc = alertAudioRed;
        break;
      case "orange":
        audioSrc = alertAudioOrange;
        break;
      case "yellow":
        audioSrc = alertAudioYellow;
        break;
      default:
        audioSrc = null;
    }

    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play().catch((error) => {
        console.log("Audio playback failed: ", error);
      });
    }
  };

  return (
    <div className="body-container">
      <img className="body-img" src={BodyIMG} alt="" />
      <div className="head" onClick={() => handleAlert("orange")} />
      <div className="cuello" onClick={() => handleAlert("yellow")} />
      <div className="pecho" onClick={() => handleAlert("red")} />
      <div className="bajos" onClick={() => handleAlert("red")} />
      <div className="pierna-izq" onClick={() => handleAlert("orange")} />
      <div className="pierna-der" onClick={() => handleAlert("orange")} />
      <div className="mano-der" onClick={() => handleAlert("yellow")} />
      <div className="mano-izq" onClick={() => handleAlert("yellow")} />
      {alertLevel && (
        <motion.div
          key={resetAnimation} // Forza el reinicio de la animación al cambiar este estado
          className={`alert-message alert-${alertLevel}`}
          initial={{ x: 0, scale: 0 }}
          animate={{ x: 0, scale: [1.1, 1.2] }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {getMessageByAgeAndLevel(selectedAge, alertLevel)}
        </motion.div>
      )}
    </div>
  );
}

export default Body;

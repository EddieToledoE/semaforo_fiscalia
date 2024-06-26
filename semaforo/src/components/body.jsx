import React, { useState, useEffect, useRef } from "react";
import "../styles/body.css";
import BodyIMG from "../assets/niña.png";
import { motion } from "framer-motion";
import alertAudioRed from "../assets/Rojo.mp3";
import alertAudioOrange from "../assets/Naranja.mp3";
import alertAudioYellow from "../assets/Verde.mp3";
import Logo from "../assets/Logo.png";
import Swal from "sweetalert2";
import denunciaImage from "../assets/no 1.png"; // Añade la imagen de concienciación

function Body({ selectedAge, onAlert }) {
  const [alertLevel, setAlertLevel] = useState("");
  const [resetAnimation, setResetAnimation] = useState(0);
  const [zone, setZone] = useState("");
  const audioRef = useRef(new Audio());

  useEffect(() => {
    // Preload audio files
    const redAudio = new Audio(alertAudioRed);
    const orangeAudio = new Audio(alertAudioOrange);
    const yellowAudio = new Audio(alertAudioYellow);

    const preloadAudios = () => {
      redAudio.load();
      orangeAudio.load();
      yellowAudio.load();
    };

    preloadAudios();
  }, []);

  const handleAlert = (level, zone) => {
    setAlertLevel(level);
    setZone(zone);
    onAlert(level);
    playAlertAudio(level);
    setResetAnimation((prev) => prev + 1);
  };

  const getMessageByAgeLevelAndZone = (age, level, zone) => {
    const messages = {
      adolescentes: {
        red: {
          head: "La cara es una zona privada y delicada. Si alguien intenta tocarte sin tu permiso, puede estar intentando cruzar límites personales.",
          pecho: "El pecho es una zona muy sensible y privada. Nadie debe tocarte allí sin tu consentimiento. Habla con alguien de confianza.",
          bajos: "Tus partes íntimas son exclusivamente tuyas. Cualquier intento de tocarlas sin tu permiso es inaceptable y probablemente malintencionado. Dile 'No' y busca ayuda de inmediato.",
        },
        orange: {
          cuello: "El cuello es una zona vulnerable. Si te sientes incómodo con alguien tocándote allí, podrían estar probando tus límites. Dilo claramente y busca apoyo.",
          panza: "La panza es una zona personal. Si alguien intenta tocarte sin tu permiso, podría tener otras intenciones. Di 'No' y aléjate.",
          pierna: "Las piernas son zonas que deben ser respetadas. Si alguien te hace sentir incómodo, podría estar buscando un contacto más íntimo.",
          pie: "Los pies también necesitan ser respetados. Toques en esta zona que parecen inocentes podrían tener otras intenciones. No permitas que alguien te toque si te hace sentir incómodo.",
        },
        yellow: {
          brazo:  "Los brazos pueden ser tocados con tu permiso. Si te sientes incómodo, podrían estar tratando de ganar tu confianza para ir más allá. Di 'No' claramente.",
          mano: "Las manos son zonas de contacto común, pero siempre debes dar tu permiso. Si te sientes mal, aléjate.",
        },
      },
      infantes: {
        red: {
          head: "Nadie debe tocar tu cara sin tu permiso. Si alguien lo intenta, podría estar queriendo sobrepasar tus límites personales. Busca ayuda de un adulto.",
          pecho: "El pecho es una parte privada. No dejes que nadie lo toque sin tu permiso, Nadie tiene porque tocarte ahi",
          bajos: "Tus partes privadas son solo tuyas. Si alguien intenta tocarlas, busca ayuda de inmediato.",
        },
        orange: {
          panza: "Tu panza es tuya y nadie debe tocarla sin tu permiso. Puede parecer inocente pero no debes permitir que te toquen ahi.",
          pierna: "Las piernas deben ser respetadas. Si alguien te hace sentir incómodo, seguro tiene malas intenciones.",
          pie: "Los pies también son privados. Si alguien los toca sin tu permiso, podrían tener otras intenciones. No dejes que alguien los toque si te sientes incómodo.",
        },
        yellow: {
          cuello: "El cuello es una parte muy fragil y peligrosa. No permitas que nadie se acerque a el.",
          brazo:  "Tus brazos son tuyos y nadie debe tocarlos sin tu permiso. Si te sientes incómodo o te causan dolor es importante decir 'No'.",
          mano:  "Aunque es común dar la mano, siempre debes sentirte cómodo. Si alguien te toca de una manera que no te gusta, diles que no.",
        },
      },
    };
    return age && level && zone
      ? messages[age === "infantes" ? "infantes" : "adolescentes"][level][zone]
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
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = audioSrc;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed: ", error);
        });
      }
    }
  };

  const showDenunciaInfo = () => {
    Swal.fire({
      title: 'Donde denunciar',
      text: 'Procuraduría de Protección de Niñas, Niños y Adolescentes del DIF Libramiento Norte Oriente Salomón González Blanco S/N Esq. Paso Limón, PatriaNueva C.P. 29000 Tuxtla Gutiérrez, Chiapas. Conmutador: (961) 61 7 00-20 Ext. 55022-55025',
      imageUrl: Logo,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Denuncia',
      confirmButtonText: 'Entendido'
    });
  };

  return (
    <div className="body-container">
      <img className="body-img" src={BodyIMG} alt="" />
      <div className="head" onClick={() => handleAlert("red", "head")} />
      <div className="cuello" onClick={() => handleAlert("yellow", "cuello")} />
      <div className="pecho" onClick={() => handleAlert("red", "pecho")} />
      <div className="panza" onClick={() => handleAlert("orange", "panza")} />
      <div className="bajos" onClick={() => handleAlert("red", "bajos")} />
      <div className="brazo-der" onClick={() => handleAlert("yellow", "brazo")} />
      <div className="brazo-izq" onClick={() => handleAlert("yellow", "brazo")} />
      <div className="pierna-izq" onClick={() => handleAlert("orange", "pierna")} />
      <div className="pierna-der" onClick={() => handleAlert("orange", "pierna")} />
      <div className="mano-der" onClick={() => handleAlert("yellow", "mano")} />
      <div className="mano-izq" onClick={() => handleAlert("yellow", "mano")} />
      <div className="pie-izq" onClick={() => handleAlert("orange", "pie")} />
      <div className="pie-der" onClick={() => handleAlert("orange", "pie")} />
      {alertLevel && (
        <motion.div
          key={resetAnimation}
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
          {getMessageByAgeLevelAndZone(selectedAge, alertLevel, zone)}
          <div className="denuncia-container" onClick={showDenunciaInfo}>
           
            <img src={denunciaImage} alt="Denuncia" className="denuncia-img" />
            <p className="denuncia-text">Toca abajo para obtener ayuda y denunciar</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Body;

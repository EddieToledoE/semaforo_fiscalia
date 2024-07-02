import React, { useEffect, useState } from "react";
import tutorialGif from "../assets/Tuto.gif";
import tutorial from "../assets/Tutorial.mp3";
import clickSound from "../assets/click.mp3"; // Importa el sonido de clic
import "../styles/tutorial.css";
import Anita from '../assets/niña.png'
import No from "../assets/no 1.png"; 
import Incomodo from '../assets/Incomodo.gif'
import Unicef from '../assets/unicef.png'
import Semaforo from '../assets/SemaforoNaranja.svg'
import Semaforo2 from '../assets/SemaforoAmarillo.svg'
import Denuncia from '../assets/Logo.png'

function Tutorial({ onTutorialEnd, selectedAge }) {
  const [showPartes, setShowPartes] = useState(false); 
  const [showOk, setShowOk] = useState(false); 
  const [showNo, setShowNo] = useState(false); 
  const [showIncomodo, setShowIncomodo] = useState(false); 
  const [showUnicef, setShowUnicef] = useState(false); 
  const [showTutorial, setShowTutorial] = useState(false); 
  const [showSemaforo, setShowSemaforo] = useState(false); 
  const [showSemaforo2, setShowSemaforo2] = useState(false);
  const [showTutorial2, setShowTutorial2] = useState(false);
  const [showDenuncia, setShowDenuncia] = useState(false); 
 
  useEffect(() => {
    const audioSrc = selectedAge === "infantes" ? tutorial : tutorial;
    const audio = new Audio(audioSrc);
    audio.play();

    const playClickSound = () => {
      const clickAudio = new Audio(clickSound);
      clickAudio.play();
    };

    const imageTimer = setTimeout(() => {
      setShowPartes(true); // Mostrar la imagen en el segundo 30
    }, 30000); // 20 seconds
    const hideImageTimer = setTimeout(() => {
      setShowPartes(false); // Ocultar la imagen después de 5 segundos
    }, 32000); // 25 seconds (20s + 5s)

    const OkTimer = setTimeout(() => {
      setShowOk(true); // Mostrar la imagen en el segundo 30
    }, 35000); // 20 seconds
    const hideOkTimer = setTimeout(() => {
      setShowOk(false); // Ocultar la imagen después de 5 segundos
    }, 38000); // 25 seconds (20s + 5s)

    const NoTimer = setTimeout(() => {
      setShowNo(true); // Mostrar la imagen en el segundo 30
    }, 50000); // 20 seconds
    const hideNoTimer = setTimeout(() => {
      setShowNo(false); // Ocultar la imagen después de 5 segundos
    }, 55000); // 25 seconds (20s + 5s)

    const IncomodoTimer = setTimeout(() => {
      setShowIncomodo(true); // Mostrar la imagen en el segundo 30
    }, 60000); // 20 seconds
    const hideIncomodoTimer = setTimeout(() => {
      setShowIncomodo(false); // Ocultar la imagen después de 5 segundos
    }, 71000); // 25 seconds (20s + 5s)

    const UnicefTimer = setTimeout(() => {
      setShowUnicef(true); // Mostrar la imagen en el segundo 30
    }, 75000); // 20 seconds
    const hideUnicefTimer = setTimeout(() => {
      setShowUnicef(false); // Ocultar la imagen después de 5 segundos
    }, 85000); // 25 seconds (20s + 5s)

    const TutoTimer = setTimeout(() => {
      setShowTutorial(true); // Mostrar la imagen en el segundo 30
    }, 98000); // 20 seconds
    const hideTutoTimer = setTimeout(() => {
      setShowTutorial(false); // Ocultar la imagen después de 5 segundos
    }, 101000); // 25 seconds (20s + 5s)

    const SemaforoTimer = setTimeout(() => {
      playClickSound(); // Reproducir el sonido de clic
      setShowSemaforo(true); // Mostrar la imagen en el segundo 30
    }, 100000); // 20 seconds
    const hideSemaforoTimer = setTimeout(() => {
      setShowSemaforo(false); // Ocultar la imagen después de 5 segundos
    }, 105000); // 25 seconds (20s + 5s)

    const Tuto2Timer = setTimeout(() => {
      setShowTutorial2(true); // Mostrar la imagen en el segundo 30
    }, 105000); // 20 seconds
    const hideTuto2Timer = setTimeout(() => {
      setShowTutorial2(false); // Ocultar la imagen después de 5 segundos
    }, 107000); // 25 seconds (20s + 5s)

    const Semaforo2Timer = setTimeout(() => {
      playClickSound(); // Reproducir el sonido de clic
      setShowSemaforo2(true); // Mostrar la imagen en el segundo 30
    }, 107000); // 20 seconds
    const hideSemaforo2Timer = setTimeout(() => {
      setShowSemaforo2(false); // Ocultar la imagen después de 5 segundos
    }, 109000); // 25 seconds (20s + 5s)

    const No2Timer = setTimeout(() => {
      setShowNo(true); // Mostrar la imagen en el segundo 30
    }, 141000); // 20 seconds
    const hideNo2Timer = setTimeout(() => {
      setShowNo(false); // Ocultar la imagen después de 5 segundos
    }, 145000); // 25 seconds (20s + 5s)

    const DenunciaTimer = setTimeout(() => {
      setShowDenuncia(true); // Mostrar la imagen en el segundo 30
    }, 158000); // 20 seconds
    const hideDenunciaTimer = setTimeout(() => {
      //setShowDenuncia(false); // Ocultar la imagen después de 5 segundos
    }, 161000); // 25 seconds (20s + 5s)
    
    const tutorialEndTimer = setTimeout(() => {
      onTutorialEnd();
    }, 161000); // 2 minutes and 41 seconds duration for the tutorial Borrar 

    return () => {
      clearTimeout(DenunciaTimer);
      clearTimeout(hideDenunciaTimer);
      clearTimeout(No2Timer);
      clearTimeout(hideNo2Timer);
      clearTimeout(Semaforo2Timer);
      clearTimeout(hideSemaforo2Timer);
      clearTimeout(Tuto2Timer);
      clearTimeout(hideTuto2Timer);
      clearTimeout(SemaforoTimer);
      clearTimeout(hideSemaforoTimer);
      clearTimeout(TutoTimer);
      clearTimeout(hideTutoTimer);
      clearTimeout(UnicefTimer);
      clearTimeout(hideUnicefTimer);
      clearTimeout(IncomodoTimer);
      clearTimeout(hideIncomodoTimer);
      clearTimeout(NoTimer);
      clearTimeout(hideNoTimer);
      clearTimeout(OkTimer);
      clearTimeout(hideOkTimer);
      clearTimeout(imageTimer);
      clearTimeout(hideImageTimer);
      clearTimeout(tutorialEndTimer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [onTutorialEnd, selectedAge]);

  return (
    <div className="tutorial-container">
       <img className="body-img" src={Anita} alt="Anita" />
      {showPartes && (
       <img className="tutorial-gif" src={tutorialGif} alt="Mano" />
      )}
      {showOk && (
        <img className="tutorial-gif" src={tutorialGif} alt="Mano" />
      )}
      {showNo && (
        <img className="no-img" src={No} alt="Letrero NO" />
      )}
      {showIncomodo && (
        <img className="incomodo-img" src={Incomodo} alt="Incomodo" />
      )}
      {showUnicef && (
        <img className="unicef-img" src={Unicef} alt="Unicef Logo" />
      )}
      {showTutorial && (
        <img className="tutorial-gif-semaforo" src={tutorialGif} alt="Mano" />
      )}
      {showSemaforo && (
        <img className="tutorial-semaforo" src={Semaforo} alt="Semaforo Naranja" />
      )}
      {showTutorial2 && (
        <img className="tutorial-gif-semaforo2" src={tutorialGif} alt="Mano" />
      )}
      {showSemaforo2 && (
        <img className="tutorial-semaforo" src={Semaforo2} alt="Semaforo Amarillo" />
      )}
      {showDenuncia && (
        <img className="tutorial-denuncia" src={Denuncia} alt="Mano" />
      )}
    </div>
  );
}

export default Tutorial;

import React, { useEffect } from "react";
import tutorialGif from "../assets/Tuto.gif";
import tutorialAudioInfantes from "../assets/TutorialN.mp4";
import tutorialAudioAdolescentes from "../assets/TutorialAdolescentes.mp4";
import "../styles/tutorial.css";

function Tutorial({ onTutorialEnd, selectedAge }) {
  useEffect(() => {
    const audioSrc = selectedAge === "infantes" ? tutorialAudioInfantes : tutorialAudioAdolescentes;
    const audio = new Audio(audioSrc);
    audio.play();

    const timer = setTimeout(() => {
      onTutorialEnd();
    }, 15000); // 10 seconds duration for the tutorial

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [onTutorialEnd, selectedAge]);

  return (
    <div className="tutorial-container">
      <img className="tutorial-gif" src={tutorialGif} alt="Tutorial" />
    </div>
  );
}

export default Tutorial;

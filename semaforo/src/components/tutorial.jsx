import React, { useEffect } from "react";
import tutorialGif from "../assets/Tuto.gif";
import tutorialAudio from "../assets/TutorialAudio.mp4";
import "../styles/tutorial.css";

function Tutorial({ onTutorialEnd }) {
  useEffect(() => {
    const audio = new Audio(tutorialAudio);
    audio.play();

    const timer = setTimeout(() => {
      onTutorialEnd();
    }, 10000); // 10 seconds duration for the tutorial

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [onTutorialEnd]);

  return (
    <div className="tutorial-container">
      <img className="tutorial-gif" src={tutorialGif} alt="Tutorial" />
    </div>
  );
}

export default Tutorial;

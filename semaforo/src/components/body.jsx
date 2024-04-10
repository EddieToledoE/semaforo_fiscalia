import React, { useState } from "react";
import "../styles/body.css";
import BodyIMG from "../assets/Cuerpo.svg";
import "../styles/age.css";
function Body() {
  return (
    <div className="body-container">
      <img src={BodyIMG} alt="" />
    </div>
  );
}

export default Body;

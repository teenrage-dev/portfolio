import React from "react";

import myFaceImage from "../assets/images/my-face.png";
import { ReactComponent as BackgroundFace } from "../assets/images/backgorund-face.svg";

import "../styles/components/_backgroundImage.scss";

export default function BackgoundImage({ style }) {
  return (
    <div className="background-container" style={{ ...style }}>
      <BackgroundFace />
      <img
        src={myFaceImage}
        alt="BackgroundImage"
        className="background-image"
      />
    </div>
  );
}

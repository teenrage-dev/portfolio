import React from "react";

import MainTitle from "../components/MainTitle";
import MainText from "../components/MainText";
import BackgoundImage from "../components/BackgoundImage";
import "./styles/_about.scss";

export const About = () => {
  return (
    <>
      <div className="section">
        <MainTitle />
        <MainText text={"sdw"} />
      </div>
      <div className="myface">
        <BackgoundImage style={{ left: "-410px" }} />
      </div>
      {/* <ParticlesContainer /> */}
    </>
  );
};

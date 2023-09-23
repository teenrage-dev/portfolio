import React from "react";
import { useNavigate } from "react-router";

import "../styles/components/_container.scss";
import "./styles/_myself.scss";

import AccentButton from "../components/AccentButton";
import BackgoundImage from "../components/BackgoundImage";
import MainTitle from "../components/MainTitle";
import MainText from "../components/MainText";
import { myselfText } from "../constants";
import { ParticlesContainer } from "../components/ParticlesContainer";

export const Myself = () => {
  const navigate = useNavigate();
  const onClick = () => navigate("/work");

  return (
    <>
      <div className="section">
        <MainTitle />
        <MainText text={myselfText} />
        <div className="wrapper-btn">
          <AccentButton onClick={onClick} />
        </div>
      </div>
      <div className="myface-myself">
        <BackgoundImage style={{ right: "10%" }} />
      </div>
      <ParticlesContainer />
    </>
  );
};

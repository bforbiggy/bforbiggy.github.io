import React from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import layer1 from "../../../assets/layer1.svg";

const buttons = [
  { text: "Github", icon: <AiFillGithub />, url: "https://github.com/bforbiggy" },
  { text: "Email", icon: <AiOutlineMail />, url: "mailto: andyhecsp@gmail.com" },
]

const Intro = () => {
  return (
    <div className="intro">
      <div className="avatar">
        <img src="https://i.imgur.com/fV9s2su.jpg" alt="Bforbiggy's pfp" />
      </div>

      <div className="buttons-container">
        {buttons.map((data) =>
          <a href={data.url}
            target="_blank" rel="noreferrer"
            className="basic-button button"
          >
            {data.icon}
            {data.text}
          </a>
        )}
      </div>

      <div
        className="intro-spacer"
        style={{ backgroundImage: `url(${layer1}` }}
      />
    </div>
  );
};

export default Intro;

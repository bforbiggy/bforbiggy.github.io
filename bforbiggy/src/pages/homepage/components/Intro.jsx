import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import layer1 from "../../../assets/layer1.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="avatar">
        <img src="https://github.com/bforbiggy.png" alt="Bforbiggy's pfp" />
      </div>
      <div className="buttons-container">
        <a
          href="https://discordapp.com/users/187003715302064128"
          target="_blank"
          className="basic-button button" rel="noreferrer"
        >
          <FaDiscord />
          Discord
        </a>
        <a
          href="https://github.com/bforbiggy"
          target="_blank"
          className="basic-button button" rel="noreferrer"
        >
          <AiFillGithub /> Github
        </a>
      </div>
      <div
        className="intro-spacer"
        style={{ backgroundImage: `url(${layer1}` }}
      ></div>
    </div>
  );
};

export default Intro;

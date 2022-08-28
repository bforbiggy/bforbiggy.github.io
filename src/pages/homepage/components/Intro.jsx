import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import layer1 from "../../../assets/layer1.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="avatar">
        <img src="https://i.imgur.com/fV9s2su.jpg" alt="Bforbiggy's pfp" />
      </div>

      <div className="buttons-container">
        <a
          href="https://discordapp.com/users/187003715302064128"
          target="_blank" rel="noreferrer"
          className="basic-button button"
        >
          <FaDiscord />
          Discord
        </a>
        <a
          href="https://github.com/bforbiggy"
          target="_blank" rel="noreferrer"
          className="basic-button button"
        >
          <AiFillGithub /> Github
        </a>
      </div>

      <div
        className="intro-spacer"
        style={{ backgroundImage: `url(${layer1}` }}
      />
    </div>
  );
};

export default Intro;

import React from "react";
import "./Projects.scss"

const projects = [
  {
    icon: "https://avatars.githubusercontent.com/u/22730639?v=4",
    link: "https://github.com/bforbiggy/bforbiggy.github.io",
    name: "Portfolio site",
    description: "You're looking at it! This portfolio site helps me track my personal progress and provides an outlet for my imagination!"
  },
  {
    icon: "https://cdn.discordapp.com/avatars/974394845164625970/c9a788bc0af08f7bd101fd6c05472e53.png",
    link: "https://github.com/bforbiggy/DonetBot",
    name: "Donet Bot",
    description: "A discord bot with miscellaneous features for fun and utility. Uses as-a-service micro architecture to include complex features such as image modifications and ai chatting."
  },
  {
    icon: "https://t3.ftcdn.net/jpg/04/21/36/18/360_F_421361860_zjgcITz10qk8pRQMxdDF4erMml6QUUYK.jpg",
    link: "https://github.com/bforbiggy/image-filter-tools",
    name: "Image Filter Tools",
    description: "An image processing library for operations such as edge detection, denoising, sharpening and my personal favorite: ascii conversion. Available as a dll and as a command line executable."
  },
  {
    icon: "https://i.imgur.com/AI5PNdd.png",
    link: "https://github.com/bforbiggy/chatting-site",
    name: "Chatting Site(Front End)",
    description: "Project site that required understanding APIs and gateways, as well as expanding a familiary with REACT."
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/en/5/59/Padlock.svg",
    link: "https://github.com/bforbiggy/chatting-backend",
    name: "Chatting Site (Back End)",
    description: "Chatting backend that utilizes REST and mongoDB to study frameworks. Incorporated cybersecurity concerns. \n(Privated for security.)"
  },
  {
    icon: "https://shmector.com/_ph/2/336231771.png",
    link: "https://github.com/bforbiggy/big-shell",
    name: "Big Shell (bish)",
    description: "Shell built entirely in C from scratch for blazing fast performance.",
  },
]

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title">
        <h1>Personal Projects</h1>
      </div>

      <div className="projects-container">
        {projects.map(data => <a
          href={data.link}
          target="_blank" rel="noreferrer"
          className="item"
        >
          <div className="icon">
            <img src={data.icon} alt="" loading="lazy" />
          </div>
          <div className="background" />
          <div className="title">
            <h2>{data.name}</h2>
          </div>
          <div className="description">
            {data.description}
          </div>
        </a>)}
      </div>
    </div>
  );
};

export default Projects;

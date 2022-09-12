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
    description: "A discord bot with miscellaneous features for fun and utility. Uses micro service architecture to perform image modifications and provide ai chat functionality."
  },
  {
    icon: "https://t3.ftcdn.net/jpg/04/21/36/18/360_F_421361860_zjgcITz10qk8pRQMxdDF4erMml6QUUYK.jpg",
    link: "https://github.com/bforbiggy/image-filter-tools",
    name: "Image Filter Tools",
    description: "A libray used for performing image operations such as edge detection, denoising, sharpening and my favorite: ascii conversion. Available as a dll and as a command line executable."
  },
  {
    icon: "https://i.imgur.com/AI5PNdd.png",
    link: "https://github.com/bforbiggy/chatting-site",
    name: "Chatting Site(Front End)",
    description: "Larger project site that helped me familiarize myself with React and it's interactions with html/css."
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/en/5/59/Padlock.svg",
    link: "https://github.com/bforbiggy/chatting-backend",
    name: "Chatting Site (Back End)",
    description: "Larger project backend that gave me the chance to learn about REST, mongoDB and basic password security. \n(Privated for security.)"
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

import React from "react";

const Projects = () => {
  return (
    <section>
      <div className="projects">
        <div className="projects-title">
          <h1>Personal Projects</h1>
        </div>

        <div className="projects-container">
          <a
            href="https://github.com/bforbiggy/bforbiggy.github.io"
            target="_blank" rel="noreferrer"
            className="item"
          >
            <div className="icon">
              <img
                src="https://avatars.githubusercontent.com/u/22730639?v=4"
                alt="Github Portfolio Site"
                loading="lazy"
              />
            </div>
            <div className="background" />
            <div className="title">
              <h2>Portfolio Site</h2>
            </div>
            <div className="description">
              You're looking at it! This portfolio site helps me track my personal progress
              and provides an outlet for my imagination!
            </div>
          </a>


          <a
            href="https://github.com/bforbiggy/DonetBot"
            target="_blank" rel="noreferrer"
            className="item"
          >
            <div className="icon">
              <img
                src="https://cdn.discordapp.com/avatars/974394845164625970/c9a788bc0af08f7bd101fd6c05472e53.png"
                alt="Donet Bot"
                loading="lazy"
              />
            </div>
            <div className="background"></div>
            <div className="title">
              <h2>Donet Bot</h2>
            </div>
            <div className="description">
              A discord bot with miscellaneous features for fun and utility.
              Uses AAS to perform image modifications and provide ai chat functionality.
            </div>
          </a>


          <a
            href="https://github.com/bforbiggy/image-filter-tools"
            target="_blank"
            className="item" rel="noreferrer"
          >
            <div className="icon">
              <img
                src="https://t3.ftcdn.net/jpg/04/21/36/18/360_F_421361860_zjgcITz10qk8pRQMxdDF4erMml6QUUYK.jpg"
                alt="Img Filter Tools"
                loading="lazy"
              />
            </div>
            <div className="background"></div>
            <div className="title">
              <h2>Image Filter Tools</h2>
            </div>
            <div className="description">
              A libray used for performing image operations such as edge detection,
              denoising, sharpening and my favorite: ascii conversion. <br />
              Available as a dll and as a command line executable.
            </div>
          </a>


          <a
            href="https://github.com/bforbiggy/chatting-site"
            target="_blank"
            className="item" rel="noreferrer"
          >
            <div className="icon">
              <img
                src="https://i.imgur.com/AI5PNdd.png"
                alt="Chatting Site (Front End)"
                loading="lazy"
              />
            </div>
            <div className="background"></div>
            <div className="title">
              <h2>Chatting Site (Front End)</h2>
            </div>
            <div className="description">
              Larger project site that helped me familiarize myself
              with React and it's interactions with html/css.
            </div>
          </a>


          <a
            href="https://github.com/bforbiggy/chatting-backend"
            target="_blank"
            className="item" rel="noreferrer"
          >
            <div className="icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/5/59/Padlock.svg"
                alt="Chatting Site (Back End)"
                loading="lazy"
              />
            </div>
            <div className="background"></div>
            <div className="title">
              <h2>Chatting Site (Back End)</h2>
            </div>
            <div className="description">
              Larger project backend that gave me the chance to learn about
              REST, mongoDB and basic password security. <br />(Privated for security.)
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Projects;

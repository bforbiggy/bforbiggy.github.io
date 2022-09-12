import React, { useEffect, useRef } from "react";
import { AiFillFire } from "react-icons/ai";
import "./Skills.scss";


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const isMobile = () => {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) // who seriously uses blackberry in this day and age...
    .test(navigator.userAgent);
};

const langs = [
  { name: "C#", icon: "devicon-csharp-plain colored", link: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
  { name: ".NET", icon: "devicon-dot-net-plain colored", link: "https://docs.microsoft.com/en-us/dotnet/" },
  { name: "HTML", icon: "devicon-html5-plain colored", link: "https://html.com" },
  { name: "CSS", icon: "devicon-css3-plain colored", link: "https://www.w3.org/TR/CSS/#css" },
  { name: "React", icon: "devicon-react-original colored", link: "https://reactjs.org" },
  { name: "Java", icon: "devicon-java-plain colored", link: "https://www.oracle.com/java/" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored", link: "https://www.javascript.com" },
  { name: "NodeJS", icon: "devicon-nodejs-plain colored", link: "https://nodejs.org/en/" },
  { name: "Python", icon: "devicon-python-plain colored", link: "https://www.python.org" },
  { name: "Git", icon: "devicon-git-plain colored", link: "https://git-scm.com" },
];

const Skills = () => {
  const mobile = isMobile();
  const skills = useRef();
  let skillContainer = useRef();

  const observer = new IntersectionObserver(async (entry) => {
    if (entry[0].isIntersecting) {
      await sleep(700);
      await onMouseEnter();
      await onMouseLeave();
    }
  });

  useEffect(() => {
    skills.current = Array.prototype.slice.call(
      document.getElementsByClassName("skill")
    );

    // Mobile users don't get skill animations
    if (mobile)
      return () => { };

    skillContainer.current = document.getElementById("skillContainer");
    observer.observe(skillContainer.current);
    return () => { observer.unobserve(skillContainer.current) };
  });

  const onMouseEnter = async () => {
    for (let i in skills.current) {
      skills.current[i].classList.add("stackHover");
      await sleep(15);
    }
  };

  const onMouseLeave = async () => {
    for (let i in skills.current) {
      skills.current[i].classList.remove("stackHover");
      await sleep(20);
    }
  };

  return (
    <div className="skills-container" id="skillContainer">
      <div className="skills-title" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <AiFillFire />Skills
      </div>
      <div className="line" />

      <div className="skills-content">
        {langs.map((lang, index) => {
          return mobile ?
            // Mobile users shouldn't click skills
            <div className="skill" key={index}>
              <i className={lang.icon} />
              <div className="blocky">{lang.name}</div>
              <div className="blocky-connector" />
            </div> :
            // Pc users can click skills all they want :O
            <a
              href={lang.link} className="skill" key={index}
              target="_blank" rel="noreferrer">
              <i className={lang.icon} />
              <div className="blocky">{lang.name}</div>
              <div className="blocky-connector" />
            </a>;
        })}
      </div>
    </div>
  );
};

export default Skills;

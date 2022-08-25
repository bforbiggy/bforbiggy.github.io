import React, { useEffect, useRef } from "react";
import { AiFillFire } from "react-icons/ai";

const Skills = () => {
  const skills = useRef();
  let element = useRef();
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

    if (!isMobile()) {
      element.current = document.getElementById("skillContainer");
      observer.observe(element.current);
    }

    return () => {
      if (!isMobile()) observer.unobserve(element.current);
    };
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

  const isMobile = () => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) // who seriously uses blackberry in this day and age...
      .test(navigator.userAgent);
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section id="skill-container" style={{ position: "relative" }}>
      <div className="skills-container" id="skillContainer">
        <div
          className="skills-title"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <AiFillFire />Skills
        </div>
        <div className="line" />

        <div className="skills-content">
          {langs.map((item, index) => (
            <a
              href={item.link}
              target="_blank" rel="noreferrer">
              <div className="skill" key={index}>
                <i className={item.icon} />
                <div className="blocky">{item.name}</div>
                <div className="blocky-connector" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import "./Homepage.scss";
import "../../styles/CoreStyles.scss";
import { layer1, layer2, layer3 } from "../../assets/svgs"
import Footer from "../../core/Footer/Footer";
import bg from "../../assets/sprinkle.svg";

import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Spacer from "../../core/Spacers/Spacer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import "./components/Skills.scss";

const HomePage = () => {
  return (
    <div
      className="homepage-container"
      style={{ backgroundImage: `url(${bg}` }}
    >
      <Intro />
      <div className="intro-spacer"
        style={{ backgroundImage: `url(${layer1}` }} />

      <AboutMe />
      <Spacer layerSvg={layer2} />

      <Skills />
      <Spacer layerSvg={layer3} />

      <Projects />
      <Footer />
    </div>
  );
};

export default HomePage;

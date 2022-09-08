import React from "react";
import "./Homepage.scss";
import "../../styles/CoreStyles.scss";
import "./components/Skills.scss";
import { layer1, layer2, layer3 } from "../../assets/svgs"

import Spacer from "../../core/Spacers/Spacer";
import Footer from "../../core/Footer/Footer";
import Intro from "./components/Intro";
import MiniBio from "./components/MiniBio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* <Intro />
      <Spacer layerSvg={layer1} customStyle={"intro-anchor"} /> */}

      <MiniBio />
      <Spacer layerSvg={layer2} />

      <Skills />
      {/* <Spacer layerSvg={layer3} />

      <Projects />
      <Footer /> */}
    </div>
  );
};

export default HomePage;

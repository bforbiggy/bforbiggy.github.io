import React from "react";
import "./Spacer.scss";

const Spacer = ({ layerSvg }) => {
  return (
    <div
      className="spacer"
      style={{ backgroundImage: `url(${layerSvg}` }}
    />
  );
};

export default Spacer;

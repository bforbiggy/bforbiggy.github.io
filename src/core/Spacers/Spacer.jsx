import React from "react";
import "./Spacer.scss";

const Spacer = ({ layerSvg, customStyle }) => {
  return (
    <div
      className={`spacer ${customStyle}`}
      style={{ backgroundImage: `url(${layerSvg}` }}
    />
  );
};

export default Spacer;

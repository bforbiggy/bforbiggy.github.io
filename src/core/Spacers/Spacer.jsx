import React from "react";
import "./Spacer.scss";

const Spacer = ({ layerSvg, customStyle }) => {
  return (
    <div className={`spacer ${customStyle}`}>
      <img src={layerSvg} alt="" />
    </div>
  );
};

export default Spacer;

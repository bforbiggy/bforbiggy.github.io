import React from "react";
import layer4 from "../../assets/layer4.svg";
import "./Footer.scss";

const date = new Date();

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="footer-spacer"
        style={{ backgroundImage: `url(${layer4}` }}
      />
      <div className="content">
        © Copyright {date.getFullYear()} by biggy
      </div>
    </div>
  );
};

export default Footer;

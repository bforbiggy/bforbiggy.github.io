import React from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const pages = [
  { text: "Home", link: "/" },
  { text: "Links", link: "/links" },
  { text: "Repositories", link: "/repositories" }
]

const Menu = ({ menu, setMenu }) => {
  const ToggleMenu = () => {
    setMenu(!menu)
  };

  const menuButton = <div className={`menu-button open ${!menu || "hide"}`} onClick={ToggleMenu}>
    <HiMenu />
  </div >;

  const menuPanel = <div className={`menu ${menu || "menu-hidden"}`}>
    <div className="menu-container">
      <div className={`menu-button close ${menu || "hide"}`} onClick={ToggleMenu}>
        <HiOutlineX />
      </div>

      <div className="menu-items">
        {pages.map(data =>
          <NavLink to={data.link} className="item" onClick={ToggleMenu} key={data.text}>
            {data.text}
          </NavLink>
        )}
      </div>
    </div>
  </div>;

  return (
    <>
      {menuButton}
      {menuPanel}
    </>
  );
};

export default Menu;

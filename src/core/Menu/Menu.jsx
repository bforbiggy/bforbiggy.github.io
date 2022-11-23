import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const pages = [
  { text: "Home", link: "/" },
  { text: "Links", link: "/links" },
  { text: "About Me", link: "/aboutme" },
  { text: "Repositories", link: "/repositories" }
]


const Menu = ({ menu, setMenu }) => {
  const disableMenu = () => { setMenu(false) };

  return (
    <div className={`menu ${menu || "hide-menu"}`}>
      <div className={`close-menu ${menu || "hidden"}`} onClick={disableMenu}>
        <HiOutlineX />
      </div>

      <div className="menu-items">
        {pages.map(data =>
          <NavLink to={data.link} className="item" onClick={disableMenu} key={data.text}>
            {data.text}
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Menu;

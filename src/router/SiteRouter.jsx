import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

import ButtonBar from "../core/ButtonBar";
import Menu from "../core/Menu/Menu";
import HomePage from "../pages/homepage/Homepage";
const Repositories = React.lazy(() => import("../pages/repositories/Repositories"));
const Links = React.lazy(() => import("../pages/links/Links"));
const AboutMe = React.lazy(() => import("../pages/aboutme/AboutMe"));
const Movie = React.lazy(() => import("../pages/movie/Movie"));

const SiteRouter = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route index element={<HomePage />} />
        <Route path="links/" element={<Links />} />
        <Route path="repositories/" element={<Repositories />} />
        <Route path="aboutme/" element={<AboutMe />} />
        <Route path="card/" element={<AboutMe />} />
        <Route path="theminionsmovie/" element={<Movie />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

const Main = () => {
  const [menu, setMenu] = React.useState(false);
  return <>
    <ButtonBar menu={menu} setMenu={setMenu} />
    <Menu menu={menu} setMenu={setMenu} />
    <Outlet />
  </>
};

export default SiteRouter;

import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

import ButtonBar from "../core/ButtonBar/ButtonBar";
import HomePage from "../pages/homepage/Homepage";
const Repositories = React.lazy(() => import("../pages/repositories/Repositories"));
const Links = React.lazy(() => import("../pages/links/Links"));

const SiteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<HomePage />} />
        <Route path="links" element={<Links />} />
        <Route path="repositories" element={<Repositories />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

const Main = () => {
  return <>
    <ButtonBar />
    <Outlet />
  </>
};

export default SiteRouter;

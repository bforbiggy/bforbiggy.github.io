import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Menu from "../core/menu/Menu";
import HomePage from "../pages/homepage/Homepage";

const Repositories = React.lazy(() => import("../pages/repositories/Repositories"));
const ProjectLayout = React.lazy(() => import("../core/ProjectLayout/ProjectLayout"));

// const ft = React.lazy(() => import("../pages/projects/ImageFilterTools"));
// {/* <Route path="image-filter-tools" element={<ift />} /> */ }

const SiteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectLayout />}>
          <Route index element={<Navigate to="/" />} />
        </Route>
        <Route path="repositories" element={<Repositories />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

const Main = () => {
  return <>
    <Menu />
    <Outlet />
  </>
};

export default SiteRouter;

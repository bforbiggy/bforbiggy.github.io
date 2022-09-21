import React, { Suspense, useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import SiteRouter from "./router/SiteRouter";
import Loader from "./core/Loader/Loader";

import "./App.scss";

const preloadedImages = [
  "https://github.com/bforbiggy.png",
];


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(preloadedImages);
  }, []);

  const cacheImages = async (preloadSources) => {
    const promises = await preloadSources.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
    setIsLoading(false);
  };

  return (
    <HashRouter >
      <Suspense>
        {isLoading ? <Loader /> : <SiteRouter />}
      </Suspense>
    </HashRouter>
  );
}

export default App;
import { Suspense, useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import ClientRoutes from "./router/Routes";
import Loader from "./core/loader/Loader";

import "./App.scss";

function App() {
  const history = createBrowserHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadedImages = ["https://github.com/bforbiggy.png"];
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
    <BrowserRouter history={history}>
      <Suspense fallback={<Loader />}>
        {isLoading ? <Loader /> : <ClientRoutes />}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Layout } from "./utility/context/Layout";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux/storeConfig/store";
import Fallback from "./@kro/components/fallback/Fallback.js";

import "./styles/theme.scss";
import "./@fake-db";

const LazyApp = lazy(() => import("./App"));

// configureDatabase()
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Fallback />}>
      <Layout>
        <LazyApp />
      </Layout>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

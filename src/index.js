import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BannerGenerator from "./components/BannerGenerator";

ReactDOM.render(
  <React.StrictMode>
    <BannerGenerator idToRender="to-render" />
  </React.StrictMode>,
  document.getElementById("root")
);

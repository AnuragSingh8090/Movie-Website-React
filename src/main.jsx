import React from "react";
import { createRoot } from "react-dom/client";
import "./css/App.css";
import "./css/Wrapper.css";
import Movies from "./Movies";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Movies />
  </BrowserRouter>
);

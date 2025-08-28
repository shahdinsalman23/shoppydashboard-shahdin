import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense("Ngo9BigBOggjHTQxAR8/V1JEaF1cWWhAYVFxWmFZfVtgcl9HYlZVQmYuP1ZhSXxWdk1hUX9YcXZQRmBYUkV9XEI=");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

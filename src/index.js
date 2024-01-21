import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={10} color="green" />
    <StarRating maxRating={5} color="blue" size={10} />
  </React.StrictMode>
);

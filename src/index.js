import React from 'react';
import ReactDOM from "react-dom/client";

/*import App from "./App";*/
import "./App.css";
/*import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";*/
import { BrowserRouter } from "react-router-dom";
/*import { AuthContextProvider } from "./context/AuthContext";*/
import Routers from './routers/Routers';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routers/>
      </BrowserRouter>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./screens/Home";
import Game from "./screens/Game";
import "./Index.css";
import { InfoProvider } from "./hooks/UseInfo";
import Favourites from "./screens/Favourites";
import Leagues from "./screens/Leagues";
import Contact from "./screens/Contact";
import Teams from "./screens/Teams";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <InfoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </InfoProvider>
    </HelmetProvider>
  </React.StrictMode>
);

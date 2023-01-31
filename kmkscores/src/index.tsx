import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Game from "./screens/Game";
import "./Index.css";
import { InfoProvider } from "./hooks/UseInfo";
import Settings from "./screens/Settings";
import Favourites from "./screens/Favourites";
import Leagues from "./screens/Leagues";
import Contact from "./screens/Contact";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <InfoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </InfoProvider>
  </React.StrictMode>
);

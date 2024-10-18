import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/page/home/Home";
import Game from "../components/page/game/Game";
import Authentication from "../components/page/authenticate/Authentication";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/game/*" element={<Game />} />
    </Routes>
  );
}

export default RoutesPath;

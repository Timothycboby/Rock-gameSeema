import React from "react";
import { Route, Routes } from "react-router-dom";
import Rock from "../components/page/gameIndexhtml/Rock";
import Private from "../components/private/Private";
function GameRoutes() {
  return (
    <Routes>
      <Route  element={<Private/>}  >
      <Route path="/" element={<Rock />} />
      </Route>
    </Routes>
  );
}

export default GameRoutes;

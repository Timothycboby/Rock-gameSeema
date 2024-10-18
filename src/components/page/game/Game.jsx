import React, { useState } from "react";
import SideBar from "../../sidebar/SideBar";
import GameRoutes from "../../../routes/GameRoutes";
function Game() {
  return (
    <div className="h-93vh w-full flex ">
      <SideBar />
      <div className=" absolute left-0">
        <GameRoutes />
      </div>
    </div>
  );
}

export default Game;

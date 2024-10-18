import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  const eGamesForChildren = [
    "Rock Paper Scissors",
    "MathQuest",
    "Alphabet Explorer",
    "Shape Detective",
    "Animal Safari",
    "Word Wizard",
    "Puzzle Paradise",
    "Coding Critters",
    "Time Traveler",
    "Music Maestro",
    "Eco Rangers",
    "Galaxy Explorer",
    "Art Studio",
    "Science Lab",
    "Number Ninjas",
    "Story Builder",
  ];
  const [side, setside] = useState(false);
  return (
    <div
      className={`w-[15%] h-[93vh] bg-[#7020f0] relative  ${
        side ? "left-0" : "left-[-15%]"
      } bg-opacity-80 backdrop-blur-sm  duration-300  z-50 `}
    >
      <div>
        <span
          className={`absolute top-[50%]  right-[-25%] z-50 cursor-pointer ${
            side ? "text-blue-600 duration-300" : "text-red-600 duration-300"
          } text-6xl `}
          onClick={() => setside(!side)}
        >
          {side ? (
            <i class="ri-arrow-right-s-line"></i>
          ) : (
            <i class="ri-arrow-left-s-line"></i>
          )}
        </span>
        <div className="h-[93vh] overflow-y-auto text-white flex flex-col gap-7 py-3 ">
          <h1 className="text-xl ml-1">Games</h1>
          {eGamesForChildren.map((item, index) => {
            return (
              <div className=" px-2  h-[10vh] w-full  " key={index}>
                <NavLink
                  to={"/game/rock"}
                  className={`px-2 py-2 bg-[#7636dd] rounded-xl hover:bg-[#6c29d8] duration-300`}
                >
                  {item}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

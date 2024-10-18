import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import Avatars from "../avatar/Avatars";
function NavBar() {
  return (
    <div className="w-full sticky top-0 h-12 bg-[#7C00FE]/100 backdrop-blur-lg flex items-center text-white text-xl border-b-[1px] border-zinc-800 gap-10 px-5 justify-between">
      <img className="h-full" src="src/public/Logo/logo.png" alt="" />
      <div className="flex gap-20">
        <ul className="flex gap-10">
          <li>
            <NavLink
              to={"/"}
              className={(e) =>
                e.isActive
                  ? "border-b-2 border-[#F9E400]"
                  : "border-b-2 border-transparent"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/game"}
              className={(e) =>
                e.isActive
                  ? "border-b-2 border-[#F9E400]"
                  : "border-b-2 border-transparent"
              }
            >
              Game
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={(e) =>
                e.isActive
                  ? "border-b-2 border-[#F9E400]"
                  : "border-b-2 border-transparent"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={(e) =>
                e.isActive
                  ? "border-b-2 border-[#F9E400]"
                  : "border-b-2 border-transparent"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/source-code"}
              className={(e) =>
                e.isActive
                  ? "border-b-2 border-[#F9E400]"
                  : "border-b-2 border-transparent"
              }
            >
              Source Code
            </NavLink>
          </li>
        </ul>
        <Search />
      </div>
      <div className="h-full">
        <Avatars />
      </div>
    </div>
  );
}

export default NavBar;

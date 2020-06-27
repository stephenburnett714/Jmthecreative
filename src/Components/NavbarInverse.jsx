import React from "react";
import Burger from "./BurgerInverse";
import jmlogo from "../Images/jmlogoblack.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
    className="flex flex-row align-items-center bg-white p-4 justify-between fixed w-screen"
      id="navbar"
    >
      
      <div className="lg:pl-32">
        <NavLink exact to={"/"}>
          <img src={jmlogo} alt="logo" />
        </NavLink>
      </div>

      <div className="flex align-items-center hidden xl:flex xl:flex-row lg:flex lg:flex-row lg:pr-32">
        <div>
          <NavLink className="text-black pr-20" exact to={"/about"}>
            About
          </NavLink>
        </div>

        <div>
          <NavLink className="text-black pr-20" exact to={"/work"}>
            Work
          </NavLink>
        </div>

        <div>
          <NavLink className="text-black pr-20" exact to={"/process"}>
            Process
          </NavLink>
        </div>

        <div>
          <NavLink exact to={"/"}>
            <button className="call-color p-1 rounded-md text-white">
              Book a call
            </button>
          </NavLink>
        </div>
      </div>
      <div className="lg:hidden flex align-items-center">
      <Burger />
      </div>
    </div>
  );
}

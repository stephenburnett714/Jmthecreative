import React from "react";
import Burger from "./Burger";
import jmlogo from "../Images/jmlogowhite.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="flex flex-row align-items-center bg-black pt-4 pb-4 justify-between fixed w-full lg:pl-24 pl-4"
      id="navbar"
    >
      
      <div>
        <NavLink exact to={"/"}>
          <img src={jmlogo} alt="logo" />
        </NavLink>
      </div>

      <div className="hidden xl:flex xl:flex-row lg:flex lg:flex-row">
        <div>
          <NavLink className="text-gray-400 pr-20" exact to={"/about"}>
            About
          </NavLink>
        </div>

        <div>
          <NavLink className="text-gray-400 pr-20" exact to={"/work"}>
            Work
          </NavLink>
        </div>

        <div>
          <NavLink className="text-gray-400 pr-20" exact to={"/process"}>
            Process
          </NavLink>
        </div>

        <div>
          <NavLink exact to={"/"}>
            <button className="call-color p-1 rounded-md mr-32 text-white">
              Book a call
            </button>
          </NavLink>
        </div>
      </div>
      <Burger />
    </div>
  );
}

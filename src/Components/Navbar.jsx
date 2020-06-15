import React from "react";
import { Link } from "react-scroll";
import Burger from "./Burger";
import jmlogo from "../Images/jmlogowhite.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="flex flex-row align-items-center bg-black pt-4 pb-4 justify-between"
      id="navbar"
    >
      <div className="ml-32 nav-bar-logo-container">
        <NavLink  exact to={'/'}>
          <img className="nav-bar-logo" src={jmlogo} alt="logo" />
        </NavLink>
      </div>

      <div className="flex flex-row ">
        <div>
        <NavLink className="text-gray-400 pr-20" exact to={'/about'}  >About</NavLink>
        </div>

        <div>
        <NavLink className="text-gray-400 pr-20" exact to={'/work'} >Work</NavLink>
        </div>

        <div>
        <NavLink className="text-gray-400 pr-20" exact to={'/process'} >Process</NavLink>
        </div>

        <div>
          <Link
            className="nav-title"
            activeClass=""
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <button className="bg-blue-500 p-1 rounded-md mr-32 text-white">
              Book a call
            </button>
          </Link>
        </div>

        <Burger />
      </div>
    </div>
  );
}

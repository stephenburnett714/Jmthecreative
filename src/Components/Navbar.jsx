import React from 'react'
import { Link } from "react-scroll";
import Burger from "./Burger"
import jmlogo from '../Images/jmlogowhite.png'


export default function Navbar() {

    return (
        <div className="flex flex-row align-items-center bg-black pt-4 pb-4 justify-between" id="navbar">

            <div className="ml-32 nav-bar-logo-container"><Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                <img className="nav-bar-logo" src={jmlogo} alt="logo" />
            </Link>
            </div>

            <div className="flex flex-row text-gray-400">
                <div><Link
                    className="pr-20"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >About</Link></div>

                <div><Link
                    className="pr-20"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Work</Link></div>



                <div><Link
                    className="pr-20"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                >Process</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass=""
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                ><button className="bg-blue-500 p-1 rounded-md mr-32 text-white">Book a call</button></Link></div>

                <Burger />
            </div>

        </div>
    )
}
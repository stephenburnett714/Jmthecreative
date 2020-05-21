import React from 'react'
import { Link } from "react-scroll";
import Burger from "./Burger"
import jmthcreative from '../Images/jmthcreative.png'


export default function Navbar() {

    return (
        <div className="nav-bar" id="navbar">

            <div className="nav-bar-logo-container"><Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                <img className="nav-bar-logo" src={jmthcreative} alt="logo" />
            </Link>
            </div>

            <div className="nav-title-container">
                <div><Link
                    className="nav-title nav-bold"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Home</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >About</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="solutions"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Dribble</Link></div>


                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                >Work</Link></div>

                <div><Link
                    className="nav-title"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                ><button className="nav-bar-button">Contact</button></Link></div>

                <Burger />
            </div>

        </div>
    )
}
import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import jmlogo from "../Images/jmlogoblack.png";


const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: center;


li {
    padding: 18px 10px;
    font-size: x-large;
}


@media (min-width: 1023px){ 
display: none;
}


@media (max-width: 1023.1px){ 
    
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
    align-items:center;
    transition: transform .3s ease-in-out;
}

`;

export default function NavMenu(props) {
    return (
        <Ul open={props.open}>
            <img className="top-0 left-0" src={jmlogo} alt=""/>
            <NavLink  exact to={'/'}>
                <li className="text-black">Home</li>
            </NavLink>

            <NavLink  exact to={'/about'}>
                <li className="text-black">About</li>
            </NavLink>

            <NavLink exact to={'/work'}
                >
                <li className="text-black">Work</li>
            </NavLink>

            <NavLink exact to={'/process'}
                >
                 <li className="text-black">Process</li>
            </NavLink>

            <NavLink to={'/'}
                >
                <button className=" call-color p-1 rounded-md text-white">Contact</button>
            </NavLink>
        </Ul>
    )
}
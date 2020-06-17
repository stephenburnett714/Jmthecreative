import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: center;


li {
    padding: 18px 10px;
    font-size: xx-large;
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
    padding-top: 12vh;
    transition: transform .3s ease-in-out;

}

`;

export default function NavMenu(props) {
    return (
        <Ul open={props.open}>
            <NavLink  exact to={'/'}>
                <li>Home</li>
            </NavLink>

            <NavLink  exact to={'/about'}>
                <li>About</li>
            </NavLink>

            <NavLink exact to={'/work'}
                >
                <li>Work</li>
            </NavLink>

            <NavLink exact to={'/process'}
                >
                 <li>Process</li>
            </NavLink>

            <NavLink to={'/'}
                >
                <button className="call-color p-1 rounded-md mr-32 text-white">Contact</button>
            </NavLink>
        </Ul>
    )
}
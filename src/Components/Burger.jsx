import React, { useState } from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu'
import jmlogo from "../Images/jmlogoblack.png";

const Logo = styled.div`
position: fixed;
z-index: 20;
left: 25px;
top: 25px;

@media screen and (min-width: 1023.1px){
  display: none
}
`
const StyledBurger = styled.div`
width:2rem;
height: 2rem;
position: fixed;
right: 25px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
z-index: 20;


div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'black' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all linear .3s;


    &:nth-child(1) {
        transform: ${({ open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
        transform: ${({ open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1 }
    }

    &:nth-child(3) {
        transform: ${({ open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}

@media screen and (min-width: 1023.1px){
  display: none
}
`;

export default function Burger() {
    const [open, setOpen] = useState(false)



    return (
        <>
        <Logo>
            <div><img src={jmlogo} alt=""/></div>
        </Logo>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <NavMenu open={open} setOpen={setOpen}/>
        </>
    )
}
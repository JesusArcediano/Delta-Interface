import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { MobileIcon, Nav, NavIcon, NavItem, NavLinks, NavLogo, NavMenu, NavbarContainer } from './NavbarStyles';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import {data} from '../../data/NavbarData';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        setShow(!show);
    }

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    const closeMobileMenu = (to, id) => {
        if (id && location.pathname === '/') {
            scrollTo(id);
        }
        navigate(to);
        setShow(false);
    }

  return (
    <IconContext.Provider value={{color:"#fff"}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon src='/assets/logo.png' alt='logo' />
                    Delta
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {show ? <FaTimes /> : <CgMenuRight />}
                </MobileIcon>
                <NavMenu>
                    {
                        data.map((item, index) => {
                            return (
                                <NavItem key={index}>
                                    <NavLinks onClick={() => closeMobileMenu(item.to, item.id)}>{item.text}</NavLinks>
                                </NavItem>
                            )
                        })
                    }
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
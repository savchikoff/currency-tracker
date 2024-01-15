import React from 'react';
import { NavbarContainer, NavbarLinks, NavbarLogo } from './styled';
import { Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';
import logo from '../../assets/logotype.svg'
import toggle from '../../assets/toggle-mock.png'

export const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLogo src={logo} alt="App Logo" />
            <NavbarLinks>
                <Link to="/">Home</Link>
                <Link to="/timeline">Timeline</Link>
                <Link to="/bank-card">Bank Card</Link>
                <Link to="/contacts">Contacts</Link>
            </NavbarLinks>
            <ToggleButton />
        </NavbarContainer>
    )
}

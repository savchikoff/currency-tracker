import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Button, Line, Menu, CloseIcon, ScrollDisabler, HeaderRow, NavbarLinks } from './styled';
import NAVIGATION from '@constants/navigation';
import closeIcon from '@assets/icons/close.svg';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <Container>
        <Button onClick={toggleMenu}>
          <Line />
          <Line />
          <Line />
        </Button>
        <Menu ref={menuRef} isopen={isOpen ? 1 : 0}>
          <HeaderRow>
            <CloseIcon src={closeIcon} alt="close-icon" onClick={closeMenu} />
          </HeaderRow>
          <NavbarLinks>
            {Object.keys(NAVIGATION).map((navItem) => {
              const { path } = NAVIGATION[navItem];
              return (
                <NavLink onClick={closeMenu} className={({ isActive }) =>
                  isActive ? "active" : ""}
                  to={path} key={navItem}>
                  {navItem}
                </NavLink>
              );
            })}
          </NavbarLinks>
        </Menu>
      </Container>
    </>
  );
};

export default BurgerMenu;

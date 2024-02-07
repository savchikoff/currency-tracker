import { NavbarContainer, NavbarLinks, NavbarLogo } from './styled';
import Container from '@styled';
import { NavLink } from 'react-router-dom';
import BurgerMenu from "./Burger";
import ToggleButton from '@components/Navbar/ToggleButton';
import logo from '@assets/logotype.svg';
import NAVIGATION from '@constants/navigation';

export const Navbar = () => {
	return (
		<Container>
			<NavbarContainer>
				<NavbarLogo data-cy="navbar-logo" src={logo} alt="app-logo" />
				<NavbarLinks data-cy="navbar-links">
					{Object.keys(NAVIGATION).map((navItem) => {
						const { path } = NAVIGATION[navItem];
						return (
							<NavLink data-cy={`nav-${navItem}`} className={({ isActive }) =>
								isActive ? "active" : ""}
								to={path} key={navItem}>
								{navItem}
							</NavLink>
						);
					})}
				</NavbarLinks>
				<ToggleButton />
				<BurgerMenu />
			</NavbarContainer>
		</Container>
	);
};

import { NavbarContainer, NavbarLinks, NavbarLogo } from './styled';
import { Container } from '../../styled';
import { NavLink } from 'react-router-dom';
import BurgerMenu from "./Burger";
import ToggleButton from '@components/Navbar/ToggleButton';
import logo from '@assets/logotype.svg';
import NAVIGATION from '@constants/navigation';

export const Navbar = () => {
	return (
		<Container>
			<NavbarContainer>
				<NavbarLogo src={logo} alt="App Logo" />
				<NavbarLinks>
					{Object.keys(NAVIGATION).map((navItem) => {
						const { path } = NAVIGATION[navItem];
						return (
							<NavLink className={({ isActive }) =>
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

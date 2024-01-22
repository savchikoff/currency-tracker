import { NavbarContainer, NavbarLinks, NavbarLogo } from './styled';
import { Container } from '../../styled';
import { Link } from 'react-router-dom';
import ToggleButton from '@components/Navbar/ToggleButton';
import logo from '@assets/logotype.svg'

export const Navbar = () => {
    return (
        <Container>
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
        </Container>
    )
}

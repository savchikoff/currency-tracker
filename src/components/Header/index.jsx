import { HeaderContainer, HeaderWrapper, HeaderTextContainer, HeaderTitle, HeaderImage } from './styled';
import { Container } from '../../styled';
import diagram from "@assets/diagram.svg"

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <HeaderWrapper>
                    <HeaderTextContainer>
                        <HeaderTitle>
                            Modsen Currency <br />Tracker
                        </HeaderTitle>
                        <p>Quotes for the dollar and other <br />international currencies.</p>
                    </HeaderTextContainer>
                    <HeaderImage src={diagram} alt="Currency Diagram" />
                </HeaderWrapper>
            </Container>
        </HeaderContainer>
    )
}

export default Header;


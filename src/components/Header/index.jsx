import React from 'react';
import { HeaderContainer, HeaderTextContainer, HeaderTitle } from './styled';
import diagram from "../../assets/diagram.svg"

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTextContainer>
                <HeaderTitle>
                    Modsen Currency <br />Tracker
                </HeaderTitle>
                <p>Quotes for the dollar and other <br />international currencies.</p>
            </HeaderTextContainer>
            <img src={diagram} alt="" />
        </HeaderContainer>
    )
}

export default Header;


import React from 'react';
import FooterLinks from './FooterLinks/index';

import {
    FooterContainer,
    FooterWrapper,
    FooterInfo,
    FooterNavigation,
    FooterTitle,
    FooterLogo,
    FooterHeader,
    FooterText,
    Copyright
} from './styled';

import logo from "../../assets/logotype.svg"

import FOOTER_INFO from './config';

const { header, text, footerNavigation, copyright } = FOOTER_INFO;

const footerLinks = footerNavigation.map((column) => (
    <FooterLinks key={column.columnName} {...column} />
))

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterInfo>
                    <FooterTitle>
                        <FooterLogo src={logo} alt="App Logo" />
                        <FooterHeader>{header}</FooterHeader>
                    </FooterTitle>
                    <FooterText>
                        {text}
                    </FooterText>
                </FooterInfo>
                <FooterNavigation>{footerLinks}</FooterNavigation>
            </FooterWrapper>
            <Copyright>{copyright}</Copyright>
        </FooterContainer>
    )
}

export default Footer;
import FooterLinks from '@components/Footer/FooterLinks'
import Accordion from './Accordion';

import {
    FooterContainer,
    FooterWrapper,
    FooterInfo,
    FooterNavigation,
    FooterTitle,
    FooterLogo,
    FooterHeader,
    FooterAccordion,
    FooterText,
    Copyright
} from './styled';
import { Container } from '../../styled';

import logo from "@assets/logotype.svg"

import FOOTER_INFO from './config';

const { header, text, footerNavigation, copyright } = FOOTER_INFO;

const footerLinksLargeDevices = footerNavigation.map((column) => (
    <FooterLinks key={column.columnName} {...column} />
))

const footerLinksSmallDevices = footerNavigation.map((column) => (
    <Accordion key={column.columnName} {...column} />
))

const Footer = () => {
    return (
        <Container>
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
                    <FooterNavigation>{footerLinksLargeDevices}</FooterNavigation>
                </FooterWrapper>
                <FooterAccordion>{footerLinksSmallDevices}</FooterAccordion>
                <Copyright>{copyright}</Copyright>
            </FooterContainer>
        </Container>
    )
}

export default Footer;
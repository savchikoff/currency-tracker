import React from 'react';

import GlobalStyle, { Container } from "../../styled";
import { Navbar } from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import LastUpdated from '../LastUpdated';
import { Outlet } from 'react-router-dom';


const AppLayout = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Navbar />
            </Container>
            <Header />
            <Container>
                <LastUpdated />
                <Outlet />
                <Footer />
            </Container>
        </>
    )
}

export default AppLayout;
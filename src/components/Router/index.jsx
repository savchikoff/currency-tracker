import React from 'react';
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";

import AppLayout from "../AppLayout";

import Home from "../../pages/Home";
import Timeline from "../../pages/Timeline";
import Contacts from "../../pages/Contacts";
import BankCard from "../../pages/BankCard";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/bank-card" element={<BankCard />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default Router;
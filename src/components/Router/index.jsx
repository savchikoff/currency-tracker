import { Route, Routes, HashRouter } from "react-router-dom";
import { Suspense } from "react";

import AppLayout from "@components/AppLayout";
import Loader from "@components/Loader";

import NAVIGATION from "@constants/navigation";

const Router = () => {
    return (
        <HashRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<AppLayout />}>
                        {Object.values(NAVIGATION).map((item) => {
                            const { path, element } = item;
                            return <Route element={element} key={path} path={path} />;
                        })}
                    </Route>
                </Routes>
            </Suspense >
        </HashRouter >
    )
}

export default Router;
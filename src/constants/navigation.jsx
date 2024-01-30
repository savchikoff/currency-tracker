import { lazy } from "react";
import ROUTES from "@constants/routes";

const Home = lazy(() => import("../pages/Home"));
const Timeline = lazy(() => import("../pages/Timeline"));
const BankCard = lazy(() => import("../pages/BankCard"));
const Contacts = lazy(() => import("../pages/Contacts"));
const NotFound = lazy(() => import("../pages/Error"));

const NAVIGATION = {
    Home: {
        path: ROUTES.home,
        element: <Home />
    },
    Timeline: {
        path: ROUTES.timeline,
        element: <Timeline />
    },
    BankCard: {
        path: ROUTES.bankCard,
        element: <BankCard />
    },
    Contacts: {
        path: ROUTES.contacts,
        element: <Contacts />
    }
}

export default NAVIGATION;
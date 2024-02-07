import ROUTES from '../constants/routes';
import { Home, Timeline, BankCard, Contacts } from './routesComponents';

const NAVIGATION = {
	Home: {
		path: ROUTES.home,
		element: <Home />,
	},
	Timeline: {
		path: ROUTES.timeline,
		element: <Timeline />,
	},
	BankCard: {
		path: ROUTES.bankCard,
		element: <BankCard />,
	},
	Contacts: {
		path: ROUTES.contacts,
		element: <Contacts />,
	},
};

export default NAVIGATION;

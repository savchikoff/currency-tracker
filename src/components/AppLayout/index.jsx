import GlobalStyle from '@GlobalStyles/styled';
import { Navbar } from '@components/Navbar';
import Header from '@components/Header';
import Footer from '@components/Footer';
import LastUpdated from '@components/LastUpdated';
import PagesContainer from '@components/PagesContainer';

const AppLayout = () => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Header />
			<LastUpdated />
			<PagesContainer />
			<Footer />
		</>
	);
};

export default AppLayout;

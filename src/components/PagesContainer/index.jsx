import { Outlet } from 'react-router-dom';
import Container from '@styled';

const PagesContainer = () => {
	return (
		<Container>
			<Outlet />
		</Container>
	);
};

export default PagesContainer;

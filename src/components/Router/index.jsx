import { Route, Routes, HashRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import AppLayout from '@components/AppLayout';
import Loader from '@components/Loader';

import NAVIGATION from '@constants/navigation';
import ROUTES from '@constants/routes';

const NotFound = lazy(() => import('@pages/Error'));

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
						<Route element={<NotFound />} path={ROUTES.notFound} />
					</Route>
				</Routes>
			</Suspense>
		</HashRouter>
	);
};

export default Router;

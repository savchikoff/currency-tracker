import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import ErrorBoundary from '@components/ErrorBoundary';
import ThemeChanger from '@components/ThemeChanger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ErrorBoundary>
		<ThemeChanger>
			<App />
		</ThemeChanger>
	</ErrorBoundary>
);

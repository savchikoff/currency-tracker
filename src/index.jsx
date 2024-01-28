import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import ErrorBoundary from '@components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>
);

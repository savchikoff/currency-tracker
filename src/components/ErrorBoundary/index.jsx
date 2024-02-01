import { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorContainer, ErrorIcon, ErrorMessage } from './styled';
import GlobalStyles from '@styled';

import error from '@assets/icons/error.svg';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorContainer>
					<GlobalStyles />
					<ErrorIcon src={error} alt="error-icon" />
					<ErrorMessage>Something went wrong with the layout</ErrorMessage>
				</ErrorContainer>
			);
		}

		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

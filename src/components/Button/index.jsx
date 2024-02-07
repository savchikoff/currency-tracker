import { memo } from 'react';
import ButtonComponent from './styled';
import PropTypes from 'prop-types';

const Button = memo(({ onClick, children, dataCy }) => {
	return (
		<ButtonComponent data-cy={dataCy} onClick={onClick}>
			{children}
		</ButtonComponent>
	);
});

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
}

export default Button;

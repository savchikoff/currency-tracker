import ButtonComponent from './styled';

const Button = ({ onClick, children, isButtonDisabled }) => {
	return (
		<ButtonComponent onClick={onClick} disabled={isButtonDisabled}>
			{children}
		</ButtonComponent>
	);
};

export default Button;

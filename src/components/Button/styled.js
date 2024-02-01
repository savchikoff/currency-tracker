import styled from 'styled-components';

const ButtonComponent = styled.button`
	position: relative;
	display: inline-block;
	font-family: inherit;
	padding: 16px 32px;
	text-align: center;
	letter-spacing: 1px;
	text-decoration: none;
	color: #00ce2c;
	background: transparent;
	cursor: pointer;
	transition: ease-out 0.5s;
	border: 2px solid #00ce2c;
	border-radius: 10px;
	box-shadow: inset 0 0 0 0 #00ce2c;

	&:hover {
		color: #ffffff;
		box-shadow: inset 0 -100px 0 0 #00ce2c;
	}

	&:active {
		transform: scale(0.9);
	}

	@media (max-width: 500px) {
		font-size: 12px;
		padding: 8px 16px;
	}
`;

export default ButtonComponent;

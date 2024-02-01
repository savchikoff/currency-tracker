import styled from 'styled-components';

export const HeaderContainer = styled.header`
	padding-top: 32px;
	padding-bottom: 56px;
	background: linear-gradient(74deg, #00b03a 7.59%, rgba(1, 185, 61, 0.45) 92%);

	@media (max-width: 768px) {
		padding-top: 20px;
		padding-bottom: 48px;
	}

	@media (max-width: 500px) {
		padding-top: 12px;
		padding-bottom: 20px;
	}
`;

export const HeaderWrapper = styled.div`
	display: flex;
	gap: 90px;
	@media (max-width: 1200px) {
		justify-content: center;
	}
`;

export const HeaderTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	@media (max-width: 1200px) {
		align-items: center;
	}
`;

export const HeaderTitle = styled.h1`
	font-size: 72px;
	text-align: right;
	background: linear-gradient(
		90deg,
		#00ce2c 0.18%,
		#aedf23 49.3%,
		#a3dc00 99.88%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media (max-width: 1200px) {
		font-size: 64px;
		text-align: center;
	}

	@media (max-width: 500px) {
		font-size: 32px;
	}
`;

export const HeaderText = styled.p`
	font-size: 24px;
	font-weight: 300;
	text-align: center;
	@media (max-width: 1200px) {
		font-size: 20px;
	}

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const HeaderImage = styled.img`
	@media (max-width: 1200px) {
		display: none;
	}
`;

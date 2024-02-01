import styled from 'styled-components';

const s48 = ({ theme }) => theme.theme.sizes.s48;
const w250 = ({ theme }) => theme.theme.width.w250;

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: ${s48};
`;

export const SearchWrapper = styled.div`
	width: ${w250};
`;

export const SearchInput = styled.input`
	font-family: inherit;
	font-weight: 300;
	font-size: 20px;
	width: 100%;
	border: none;
	border-bottom: 2px solid #474747;
	outline: 0;
	color: #ffffff;
	padding: 8px 0;
	background: transparent;
	transition: border-color 0.2s;
	&:focus {
		font-weight: 400;
		border-image: linear-gradient(
			90deg,
			#00ce2c 0.18%,
			#aedf23 49.3%,
			#a3dc00 99.88%
		);
		border-image-slice: 1;
	}

	position: relative;
	z-index: 2;

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const ResultListContainer = styled.div`
	position: absolute;
	z-index: 1;
	width: 250px;
`;

export const ResultList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const ResultItem = styled.li`
	font-size: 14px;
	padding: 16px 32px;
	border: 1px solid #474747;
	background-color: #202025;

	@media (max-width: 500px) {
		font-size: 12px;
		padding: 8px 16px;
	}
`;

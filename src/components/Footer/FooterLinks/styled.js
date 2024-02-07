import styled from 'styled-components';

const s24 = ({ theme }) => theme.themeType.sizes.s28;
const s28 = ({ theme }) => theme.themeType.sizes.s28;
const s40 = ({ theme }) => theme.themeType.sizes.s40;
const fontLight = ({ theme }) => theme.themeType.fontWeights.light;
const fontNormal = ({ theme }) => theme.themeType.fontWeights.normal;
const themeTextColor = ({ theme }) => theme.themeType.themeColors.text;
const mintGreenColor = ({ theme }) => theme.themeType.colors.mintGreen;
const monsoonColor = ({ theme }) => theme.themeType.colors.monsoon;

export const LinksColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s40};
`;

export const LinksHeader = styled.span`
	color: ${themeTextColor};
	font-size: ${s28};
	font-weight: ${fontLight}
`;

export const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s28};

	a {
		color: ${monsoonColor};
		font-size: ${s24};
		font-weight: ${fontNormal};
		transition: all 0.3s ease;

		&:hover {
			color: ${mintGreenColor};
		}
	}
`;

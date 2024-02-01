import styled from 'styled-components';

const dfc = ({ theme }) => theme.theme.displayValues.dfc;
const s24 = ({ theme }) => theme.theme.sizes.s28;
const s28 = ({ theme }) => theme.theme.sizes.s28;
const s40 = ({ theme }) => theme.theme.sizes.s40;
const fontLight = ({ theme }) => theme.theme.fontWeights.light;
const fontNormal = ({ theme }) => theme.theme.fontWeights.normal;
const themeTextColor = ({ theme }) => theme.theme.themeColors.text;
const mintGreenColor = ({ theme }) => theme.theme.colors.mintGreen;
const monsoonColor = ({ theme }) => theme.theme.colors.monsoon;

export const LinksColumn = styled.div`
	${dfc};
	gap: ${s40};
`;

export const LinksHeader = styled.span`
	color: ${themeTextColor};
	font-size: ${s28};
	font-weight: ${fontLight}
`;

export const Links = styled.div`
	${dfc};
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

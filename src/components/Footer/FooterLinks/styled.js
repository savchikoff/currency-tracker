import styled from "styled-components";

export const LinksColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px; 
`;

export const LinksHeader = styled.span`
    color: ${props => props.theme.theme.themeColors.text};
    font-size: 28px;
    font-weight: 300;
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;

    a{
        color: #898989;
        font-size: 24px;
        font-weight: 400;
        transition: all 0.3s ease;

        &:hover{
            color: #00BC4F;
        }
    }
`
import styled from "styled-components";

const ButtonComponent = styled.button`
    position: relative;
    display: inline-block;
    font-family: inherit;
    padding: 16px 32px;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    color: #00CE2C;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid #00CE2C;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 #00CE2C;

    &:hover {
        color: #FFFFFF;
        box-shadow: inset 0 -100px 0 0 #00CE2C;
    }

    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 500px){
        font-size: 12px;
        padding: 8px 16px;
    }
`

export default ButtonComponent;

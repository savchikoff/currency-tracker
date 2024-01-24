import ButtonComponent from "./styled";

const Button = ({ onClick, children }) => {
    return (
        <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
    )
}

export default Button;
import { useRef, useEffect, memo } from "react";
import ReactDOM from "react-dom";
import { Background, Wrapper, HeaderRow, ScrollDisabler, Content, AmountInput, ChosenCurrencyContainer, ChosenCurrencyWrapper, ChosenCurrencyImage, ChosenCurrencyName } from "./styled";
import closeIcon from "@assets/icons/close.svg";

const portalRoot = document.getElementById("portal-root");

const Modal = ({ isOpen, close }) => {
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                close();
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        }
    }, [isOpen]);

    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <>
            <Background>
                <Wrapper ref={ref}>
                    <HeaderRow>
                        <img
                            src={closeIcon}
                            alt=""
                            style={{ cursor: "pointer" }}
                            onClick={close}
                        />
                    </HeaderRow>
                    <Content>
                        <AmountInput />
                        <ChosenCurrencyContainer>
                            <ChosenCurrencyWrapper>
                                <ChosenCurrencyImage />
                                <ChosenCurrencyName>
                                    USD
                                </ChosenCurrencyName>
                            </ChosenCurrencyWrapper>
                        </ChosenCurrencyContainer>
                    </Content>
                </Wrapper>
            </Background>
            <ScrollDisabler />
        </>,
        portalRoot
    );
};

export default Modal;
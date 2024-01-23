import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Background, Wrapper, HeaderRow, ScrollDisabler, Content } from "./styled";
import closeIcon from "@assets/icons/close.svg";

const portalRoot = document.getElementById("portal-root");

const Modal = ({ isOpen, close, children }) => {
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
                        {children}
                    </Content>
                </Wrapper>
            </Background>
            <ScrollDisabler />
        </>,
        portalRoot
    );
};

export default Modal;
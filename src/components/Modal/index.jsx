import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import {
	Background,
	Wrapper,
	HeaderRow,
	ScrollDisabler,
	Content,
	CloseIcon
} from './styled';
import closeIcon from '@assets/icons/close.svg';

const portalRoot = document.getElementById('portal-root');

const Modal = ({ isOpen, close, children }) => {
	const ref = useRef();

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (isOpen && ref.current && !ref.current.contains(e.target)) {
				close();
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [isOpen]);

	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<>
			<Background>
				<Wrapper ref={ref}>
					<HeaderRow>
						<CloseIcon
							src={closeIcon}
							alt="close-icon"
							onClick={close}
						/>
					</HeaderRow>
					<Content>{children}</Content>
				</Wrapper>
			</Background>
			<ScrollDisabler />
		</>,
		portalRoot
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Modal;

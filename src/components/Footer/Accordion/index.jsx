import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
	Container,
	Chevron,
	Title,
	ContentWrapper,
	Content,
	Links,
} from './styled';

const Accordion = ({ columnName, links }) => {
	const [isExpanded, setExpand] = useState();

	const contentRef = useRef();
	const contentHeight = isExpanded ? contentRef.current.scrollHeight : 0;

	const handleExpandToggle = () => {
		setExpand(!isExpanded);
	};

	return (
		<Container>
			<Title onClick={handleExpandToggle}>
				{columnName}
				<Chevron direction={isExpanded ? 'top' : 'bottom'} />
			</Title>
			<ContentWrapper maxheight={contentHeight}>
				<Content ref={contentRef}>
					<Links>
						{links.map((link) => (
							<Link key={link}>{link}</Link>
						))}
					</Links>
				</Content>
			</ContentWrapper>
		</Container>
	);
};

Accordion.propTypes = {
	columnName: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired,
};

export default Accordion;

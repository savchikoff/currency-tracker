import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LinksColumn, LinksHeader, Links } from './styled';

const FooterLinks = ({ columnName, links }) => {
	return (
		<LinksColumn>
			<LinksHeader>{columnName}</LinksHeader>
			<Links>
				{links.map((link) => (
					<Link key={link}>{link}</Link>
				))}
			</Links>
		</LinksColumn>
	);
};

FooterLinks.propTypes = {
	columnName: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired,
};

export default FooterLinks;

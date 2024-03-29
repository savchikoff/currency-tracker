import { memo } from 'react';
import PropTypes from 'prop-types';
import {
	CardContainer,
	CardWrapper,
	CardImage,
	CardTextContent,
	CardHeader,
	CardValue,
} from './styled';

const CurrencyCard = memo(({ name, img, alt, value, handleCardClick, dataCy }) => {
	return (
		<CardContainer data-cy={dataCy} onClick={handleCardClick}>
			<CardWrapper>
				<CardImage src={img} alt={alt} />
				<CardTextContent>
					<CardHeader>{name}</CardHeader>
					<CardValue>{value}</CardValue>
				</CardTextContent>
			</CardWrapper>
		</CardContainer>
	);
});

CurrencyCard.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleCardClick: PropTypes.func,
};

export default CurrencyCard;

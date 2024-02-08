import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
	CurrencySectionCards,
	CurrencySectionContainer,
	CurrencySectionHeader,
} from './styled';
import CurrencyCard from '@components/Currencies/CurrencyCard';
import formatCurrencies from '@helpers/formatCurrencies';

const CurrencySection = ({
	header,
	cards,
	currencies,
	handleConvertorModalOpen,
	isClickable,
}) => {
	const formattedCurrencyRates = useMemo(() => {
		return cards.map(({ id }) =>
			formatCurrencies(currencies, id)
		);
	}, [cards, currencies]);

	const handleModalOpen = useCallback((id, img) => () => {
		handleConvertorModalOpen(id, img)
	}, [handleConvertorModalOpen]);


	return (
		<CurrencySectionContainer>
			<CurrencySectionHeader>{header}</CurrencySectionHeader>
			<CurrencySectionCards>
				{cards.map(({ id, img, title }, index) => (
					<CurrencyCard
						key={title}
						name={title}
						img={img}
						alt={title}
						value={formattedCurrencyRates[index]}
						dataCy={`currency-card-${id}`}
						handleCardClick={
							isClickable
								? handleModalOpen(id, img)
								: undefined
						}
					/>
				))}
			</CurrencySectionCards>
		</CurrencySectionContainer>
	);
};

CurrencySection.propTypes = {
	header: PropTypes.string.isRequired,
	cards: PropTypes.array,
	currencies: PropTypes.object,
	handleConvertorModalOpen: PropTypes.func,
	isClickable: PropTypes.bool.isRequired,
};

export default CurrencySection;

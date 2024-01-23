import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { CurrencySectionCards, CurrencySectionContainer, CurrencySectionHeader } from './styled';
import CurrencyCard from '@components/Currencies/CurrencyCard';
import { formatCurrencies } from '@utils/formatting';

const CurrencySection = ({ header, cards, currencies, handleConvertorModalOpen, isClickable }) => {

    const formattedCurrencyRates = useMemo(() => {
        return cards.map(({ id, value }) => formatCurrencies(currencies, id, value));
    }, [cards, currencies]);

    return (
        <>
            <CurrencySectionContainer>
                <CurrencySectionHeader>{header}</CurrencySectionHeader>
                <CurrencySectionCards>
                    {cards.map(({ id, img, title }, index) => (
                        <CurrencyCard key={title} name={title} img={img} alt={title} value={formattedCurrencyRates[index]} handleCardClick={isClickable ? () => handleConvertorModalOpen(id, img) : undefined} />
                    ))}
                </CurrencySectionCards>
            </CurrencySectionContainer>
        </>

    )
}

CurrencySection.propTypes = {
    header: PropTypes.string,
    cards: PropTypes.array,
    handleOpenModal: PropTypes.func
}

export default CurrencySection;
import PropTypes from 'prop-types';
import { CurrencySectionCards, CurrencySectionContainer, CurrencySectionHeader } from './styled';
import CurrencyCard from '@components/Currencies/CurrencyCard';

const CurrencySection = ({ header, cards, onClick }) => {

    return (
        <>
            <CurrencySectionContainer>
                <CurrencySectionHeader>{header}</CurrencySectionHeader>
                <CurrencySectionCards>
                    {cards.map(({ id, img, title }, index) => (
                        <CurrencyCard key={title} name={title} img={img} alt={title} value={index} handleCardClick={onClick} />
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
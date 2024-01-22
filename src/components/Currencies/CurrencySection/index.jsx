import PropTypes from 'prop-types';
import { CurrencySectionCards, CurrencySectionContainer, CurrencySectionHeader } from './styled';
import CurrencyCard from '@components/Currencies/CurrencyCard';

const CurrencySection = ({ header, cards }) => {
    return (
        <>
            <CurrencySectionContainer>
                <CurrencySectionHeader>{header}</CurrencySectionHeader>
                <CurrencySectionCards>
                    {cards.map(({ id, img, title }, index) => (
                        <CurrencyCard onClick={() => setOpen(true)} key={title} name={title} img={img} alt={title} value={index} />
                    ))}
                </CurrencySectionCards>
            </CurrencySectionContainer>
        </>

    )
}

CurrencySection.propTypes = {
    header: PropTypes.string,
    cards: PropTypes.array
}

export default CurrencySection;
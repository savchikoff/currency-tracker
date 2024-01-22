import { CurrencySectionCards, CurrencySectionContainer, CurrencySectionHeader } from './styled';
import CurrencyCard from '@components/Currencies/CurrencyCard';

const CurrencySection = ({ header, cards }) => {
    return (
        <CurrencySectionContainer>
            <CurrencySectionHeader>{header}</CurrencySectionHeader>
            <CurrencySectionCards>
                {cards.map(({ id, img, title }, index) => (
                    <CurrencyCard key={title} name={title} img={img} alt={title} value={index} />
                ))}
            </CurrencySectionCards>
        </CurrencySectionContainer>
    )
}

export default CurrencySection;
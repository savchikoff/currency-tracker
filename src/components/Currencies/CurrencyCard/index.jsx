import PropTypes from 'prop-types';
import { CardContainer, CardWrapper, CardImage, CardTextContent, CardHeader, CardValue } from "./styled"

const CurrencyCard = ({ name, img, alt, value, handleCardClick }) => {
    return (
        <CardContainer onClick={handleCardClick}>
            <CardWrapper>
                <CardImage src={img} alt={alt} />
                <CardTextContent>
                    <CardHeader>{name}</CardHeader>
                    <CardValue>{value}</CardValue>
                </CardTextContent>
            </CardWrapper>
        </CardContainer>
    )
}

CurrencyCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleCardClick: PropTypes.func
}

export default CurrencyCard;
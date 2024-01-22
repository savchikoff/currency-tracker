import { CardContainer, CardWrapper, CardImage, CardTextContent, CardHeader, CardValue } from "./styled"

const CurrencyCard = ({ name, img, alt, value }) => {
    return (
        <CardContainer>
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

export default CurrencyCard;
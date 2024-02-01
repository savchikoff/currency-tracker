import { useState } from 'react';
import PropTypes from 'prop-types';

import {
	Main,
	DropDownContainer,
	DropDownHeader,
	DropDownListContainer,
	DropDownList,
	CurrencyImage,
	CurrencyName,
	ListItem,
} from './styled';

import { QUOTES_DATA } from '@constants/currencies';

const Select = ({
	targetCurrency,
	chosenCurrency,
	setTargetCurrency,
	setConvertedAmount,
}) => {
	const { id, img } = targetCurrency;

	const [isOpen, setIsOpen] = useState(false);

	const toggleSelect = () => setIsOpen(!isOpen);

	const handleCurrencyClick = (currency) => {
		setTargetCurrency(currency);
		setIsOpen(false);
		setConvertedAmount(0);
	};

	return (
		<Main>
			<DropDownContainer>
				<DropDownHeader onClick={toggleSelect}>
					<CurrencyImage src={img} />
					<CurrencyName>{id}</CurrencyName>
				</DropDownHeader>
				{isOpen && (
					<DropDownListContainer>
						<DropDownList>
							{QUOTES_DATA.filter(({ id }) => id !== chosenCurrency.id).map(
								(currency) => {
									const { id, img } = currency;
									return (
										<ListItem
											key={id}
											onClick={() => handleCurrencyClick(currency)}
										>
											<CurrencyImage src={img} />
											<CurrencyName>{id}</CurrencyName>
										</ListItem>
									);
								}
							)}
						</DropDownList>
					</DropDownListContainer>
				)}
			</DropDownContainer>
		</Main>
	);
};

Select.propTypes = {
	targetCurrency: PropTypes.object.isRequired,
	chosenCurrency: PropTypes.object.isRequired,
	setTargetCurrency: PropTypes.func.isRequired,
	setConvertedAmount: PropTypes.func.isRequired,
};

export default Select;

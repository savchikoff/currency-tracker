import { Component } from 'react';

import Map from './Map';
import SearchBar from './SearchBar';

import { QUOTES_DATA } from '@constants/currencies';
import BANKS from './config';

import CurrentCurrencyLabel from './styled';

export default class BanksMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currencyForSearch: '',
			banksWithCurrency: [],
		};
	}

	handleCurrencyForSearchChange = (currency) => {
		this.setState({ currencyForSearch: currency });
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.currencyForSearch !== prevState.currencyForSearch) {
			const banks = BANKS.filter((bank) =>
				bank.currencies.includes(this.state.currencyForSearch)
			);
			this.setState({ banksWithCurrency: banks });
		}
	}

	render() {
		return (
			<>
				<SearchBar
					data={QUOTES_DATA}
					changeSearchCurrency={this.handleCurrencyForSearchChange}
				/>
				<CurrentCurrencyLabel>
					Currency for search: {this.state.currencyForSearch}
				</CurrentCurrencyLabel>
				<Map banks={this.state.banksWithCurrency} />
			</>
		);
	}
}

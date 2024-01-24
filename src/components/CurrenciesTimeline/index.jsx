import { Component } from 'react'

import CurrenciesChart from "./CurrenciesChart";
import CurrenciesTabs from './CurrenciesTabs';
import TimelineDatesSelect from './TimelineDatesSelect';

import CANDLESTICK_DATA from './mockData';
import { BASE_CURRENCY, QUOTES_DATA } from '@constants/currencies';

import { TimelineContainer } from './styled';

export default class CurrenciesTimeline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCurrency: BASE_CURRENCY
        }

        this.setState = this.setState.bind(this);
    }

    render() {
        return (
            <TimelineContainer>
                <CurrenciesTabs currencies={QUOTES_DATA} selectedCurrency={this.state.selectedCurrency} setSelectedCurrency={this.setState} />
                <TimelineDatesSelect />
                <CurrenciesChart data={CANDLESTICK_DATA} />
            </TimelineContainer>
        )
    }
}

import { Component } from 'react'

import CurrenciesChart from "./CurrenciesChart";
import CurrenciesTabs from './CurrenciesTabs';
import TimelineDatesSelect from './TimelineDatesSelect';
import ChartChangeModal from './ChartChangeModal';

import CANDLESTICK_DATA from './mockData';
import { BASE_CURRENCY, QUOTES_DATA } from '@constants/currencies';

import { TimelineContainer, SelectsWrapper } from './styled';
import Button from "@components/Button";

export default class CurrenciesTimeline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCurrency: BASE_CURRENCY,
            isOpen: false
        }

        this.setState = this.setState.bind(this);
    }

    handleChartChangeModalOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    handleChartChangeModalClose = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <>
                <TimelineContainer>
                    <CurrenciesTabs currencies={QUOTES_DATA} selectedCurrency={this.state.selectedCurrency} setSelectedCurrency={this.setState} />
                    <SelectsWrapper>
                        <TimelineDatesSelect />
                        <Button onClick={this.handleChartChangeModalOpen}>Update data</Button>
                    </SelectsWrapper>
                    <CurrenciesChart data={CANDLESTICK_DATA} />
                </TimelineContainer>
                <ChartChangeModal isOpen={this.state.isOpen} close={this.handleChartChangeModalClose} />
            </>
        )
    }
}

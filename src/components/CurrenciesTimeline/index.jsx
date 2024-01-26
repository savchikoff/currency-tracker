import { Component } from 'react'

import CurrenciesChart from "./CurrenciesChart";
import CurrenciesTabs from './CurrenciesTabs';
import TimelineDatePicker from './TimelineDatePicker';
import ChartChangeModal from './ChartChangeModal';

import { BASE_CURRENCY, QUOTES_DATA } from '@constants/currencies';

import { TimelineContainer, UpdateWrapper } from './styled';
import Button from "@components/Button";

import { randomizeData } from "@utils/randomizer";

export default class CurrenciesTimeline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCurrency: BASE_CURRENCY,
            selectedDate: 0,
            isOpen: false,
            dateForChange: 0,
            dataForChange: [],
            chartData: []
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

    handleStartDateChange = (date) => {
        this.setState({
            selectedDate: date
        })
    }

    handleRandomize = () => {
        this.setState({
            chartData: randomizeData(this.state.selectedDate, 30, 0, 20)
        })
    }

    handleDataChange = (date, data) => {
        this.setState({
            dateForChange: date,
            dataForChange: data
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedDate !== this.state.selectedDate) {
            this.setState({
                chartData: randomizeData(this.state.selectedDate, 30, 0, 20)
            })
        }

        if (prevState.dateForChange !== this.state.dateForChange || prevState.dataForChange !== this.state.dataForChange) {
            this.setState({
                chartData: this.state.chartData.map(data => {
                    const { x: date } = data;
                    const msDate = +date;
                    if (msDate == this.state.dateForChange) {
                        return {
                            x: date,
                            y: this.state.dataForChange
                        }
                    }
                    return data;
                })
            })
        }
    }

    render() {
        const isButtonsEnabled = !!this.state.selectedDate && this.state.selectedCurrency;
        return (
            <>
                <TimelineContainer>
                    <CurrenciesTabs currencies={QUOTES_DATA} selectedCurrency={this.state.selectedCurrency} setSelectedCurrency={this.setState} />
                    <UpdateWrapper>
                        <TimelineDatePicker handleStartDateChange={this.handleStartDateChange} />
                        {
                            isButtonsEnabled &&
                            <>
                                <Button onClick={this.handleChartChangeModalOpen}>Update data</Button>
                                <Button onClick={this.handleRandomize}>Randomize</Button>
                            </>

                        }
                    </UpdateWrapper>
                    <CurrenciesChart data={this.state.chartData} />
                </TimelineContainer>
                <ChartChangeModal isOpen={this.state.isOpen} close={this.handleChartChangeModalClose} data={this.state.chartData} handleDataChange={this.handleDataChange} />
            </>
        )
    }
}

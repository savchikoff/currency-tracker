import { Component } from 'react';

import CurrenciesChart from './CurrenciesChart';
import CurrenciesTabs from './CurrenciesTabs';
import TimelineDatePicker from './TimelineDatePicker';
import ChartChangeModal from './ChartChangeModal';
import Button from '@components/Button';
import Notification from './Notification';

import { BASE_CURRENCY } from '@constants/currencies';

import { TimelineContainer, UpdateWrapper } from './styled';

import { randomizeDataWithCurrency } from '@utils/randomizer';

import observable from '../Observer';

export default class CurrenciesTimeline extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedCurrency: BASE_CURRENCY,
			selectedDate: 0,
			isOpen: false,
			isNotificationActive: false,
			dateForChange: 0,
			dataForChange: [],
			chartData: [],
		};

		this.setState = this.setState.bind(this);
		this.notify = this.notify.bind(this);
		this.handleNotificationActive = this.handleNotificationActive.bind(this);
	}

	componentDidMount() {
		observable.subscribe(this.notify);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.selectedDate !== this.state.selectedDate ||
			prevState.selectedCurrency !== this.state.selectedCurrency
		) {
			if (this.state.selectedDate) {
				this.handleRandomize();
			}
		}

		if (
			prevState.dateForChange !== this.state.dateForChange ||
			prevState.dataForChange !== this.state.dataForChange
		) {
			this.setState({
				chartData: this.state.chartData.map((data) => {
					const { x: date } = data;
					const msDate = +date;
					if (msDate == this.state.dateForChange) {
						return {
							x: date,
							y: this.state.dataForChange,
						};
					}
					return data;
				}),
			});
			this.handleNotify();
		}
	}

	componentWillUnmount() {
		observable.unsubscribe(this.notify);
	}

	notify() {
		this.setState({
			isNotificationActive: true,
		});
	}

	handleNotificationActive() {
		this.setState({
			isNotificationActive: false,
		});
	}

	handleNotify() {
		observable.notify();
	}

	handleChartChangeModalOpen = () => {
		this.setState({
			isOpen: true,
		});
	};

	handleChartChangeModalClose = () => {
		this.setState({
			isOpen: false,
		});
	};

	handleStartDateChange = (date) => {
		this.setState({
			selectedDate: date,
		});
	};

	handleRandomize = () => {
		this.setState({
			chartData: randomizeDataWithCurrency(
				this.state.selectedDate,
				this.state.selectedCurrency.id,
				30
			),
		});
		this.handleNotify();
	};

	handleDataChange = (date, data) => {
		this.setState({
			dateForChange: date,
			dataForChange: data,
		});
	};

	render() {
		const isButtonsEnabled =
			!!this.state.selectedDate && this.state.selectedCurrency;
		return (
			<>
				<TimelineContainer>
					<CurrenciesTabs
						selectedCurrency={this.state.selectedCurrency}
						setSelectedCurrency={this.setState}
					/>
					<UpdateWrapper>
						<TimelineDatePicker
							handleStartDateChange={this.handleStartDateChange}
						/>
						{isButtonsEnabled && (
							<>
								<Button dataCy="update-btn" onClick={this.handleChartChangeModalOpen}>
									Update
								</Button>
								<Button dataCy="randomize-btn" onClick={this.handleRandomize}>Randomize</Button>
							</>
						)}
					</UpdateWrapper>
					<CurrenciesChart data={this.state.chartData} />
				</TimelineContainer>
				<Notification
					active={this.state.isNotificationActive}
					handleNotificationActive={this.handleNotificationActive}
				/>
				<ChartChangeModal
					dataCy="chart-modal"
					isOpen={this.state.isOpen}
					close={this.handleChartChangeModalClose}
					data={this.state.chartData}
					handleDataChange={this.handleDataChange}
				/>
			</>
		);
	}
}

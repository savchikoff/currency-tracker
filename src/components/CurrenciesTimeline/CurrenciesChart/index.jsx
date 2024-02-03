import { Component } from 'react';
import PropTypes from 'prop-types';

import Chart from 'react-apexcharts';

import CANDLESTICK_OPTIONS from './config';

export default class CurrenciesChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					data: [],
				},
			],
			options: CANDLESTICK_OPTIONS,
		};
	}

	componentDidMount() {
		this.setState({
			series: [
				{
					data: this.props.data,
				},
			],
		});
	}

	componentDidUpdate(prevProps) {
		if (prevProps.data !== this.props.data) {
			this.setState({
				series: [
					{
						data: this.props.data,
					},
				],
			});
		}
	}

	render() {
		const { data } = this.props;
		const isDataEmpty = !!data.length;
		return (
			isDataEmpty && (
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="candlestick"
					height={350}
					data-cy="currencies-chart"
				/>
			)
		);
	}
}

CurrenciesChart.propTypes = {
	data: PropTypes.array.isRequired,
};

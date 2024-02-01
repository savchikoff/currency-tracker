const CANDLESTICK_OPTIONS = {
	chart: {
		type: 'candlestick',
		height: 350,
	},
	xaxis: {
		type: 'datetime',
		labels: {
			format: 'dd/MM',
		},
	},
	yaxis: {
		tooltip: {
			enabled: true,
		},
	},
};

export default CANDLESTICK_OPTIONS;

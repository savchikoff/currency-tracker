const MILLISECONDS_DAY = 86400000;

export const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

export const randomizeData = (selectedDate, days, min, max) =>
	Array(days)
		.fill({})
		.map((item, index) => {
			const high = getRandomFloat(min, max);
			const low = getRandomFloat(min, high);
			const open = getRandomFloat(min, high);
			const close = getRandomFloat(min, high);
			return {
				x: new Date(selectedDate + MILLISECONDS_DAY * index),
				y: [open, high, low, close],
			};
		});

export const randomizeDataWithCurrency = (
	selectedDate,
	selectedCurrency,
	days
) =>
	Array(days)
		.fill({})
		.map((item, index) => {
			let min;
			let max;
			switch (selectedCurrency) {
				case 'USD':
					min = 0.005487;
					max = 1;
					break;
				case 'ARS':
					min = 300.589575;
					max = 900.589318;
					break;
				case 'CAD':
					min = 0.985471;
					max = 1.645789;
					break;
				case 'JPY':
					min = 50.74589;
					max = 152.177498;
					break;
				case 'AUD':
					min = 1.145795;
					max = 1.745891;
					break;
				case 'CNY':
					min = 3.745697;
					max = 7.169311;
					break;
				case 'EUR':
					min = 0.479594;
					max = 1.314579;
					break;
				case 'BTC':
					min = 0.000001;
					max = 0.000025;
					break;
				case 'LTC':
					min = 0.000244;
					max = 0.015222;
					break;
				default:
					min = 0;
					max = 0;
			}

			const high = getRandomFloat(min, max);
			const low = getRandomFloat(min, high);
			const open = getRandomFloat(min, high);
			const close = getRandomFloat(min, high);
			return {
				x: new Date(selectedDate + MILLISECONDS_DAY * index),
				y: [open, high, low, close],
			};
		});

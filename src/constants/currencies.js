import bovespa from '../assets/icons/BOVESPA.svg';
import ifix from '../assets/icons/IFIX.svg';
import dollar from '../assets/icons/USD.svg';
import peso from '../assets/icons/ARS.svg';
import canadianDollar from '../assets/icons/CAD.svg';
import yen from '../assets/icons/JPY.svg';
import australianDollar from '../assets/icons/AUD.svg';
import yuan from '../assets/icons/CNY.svg';
import euro from '../assets/icons/EUR.svg';
import bitcoin from '../assets/icons/BTC.svg';
import libra from '../assets/icons/LIBRA.svg';

export const STOCKS_DATA = [
	{
		title: 'Bovespa Index',
		img: bovespa,
		value: '0.15%',
	},
	{
		title: 'IFIX',
		img: ifix,
		value: '0.15%',
	},
];

export const BASE_CURRENCY = {
	id: 'USD',
	img: dollar,
};

export const QUOTES_DATA = [
	{
		id: 'USD',
		img: dollar,
		title: 'Commercial Dollar',
	},
	{
		id: 'ARS',
		img: peso,
		title: 'Argentine Peso',
	},
	{
		id: 'CAD',
		img: canadianDollar,
		title: 'Canadian Dollar',
	},
	{
		id: 'JPY',
		img: yen,
		title: 'Yen',
	},
	{
		id: 'AUD',
		img: australianDollar,
		title: 'Australian Dollar',
	},
	{
		id: 'CNY',
		img: yuan,
		title: 'Yuan',
	},
	{
		id: 'EUR',
		img: euro,
		title: 'Euro',
	},
	{
		id: 'BTC',
		img: bitcoin,
		title: 'Bitcoin',
	},
	{
		id: 'LTC',
		img: libra,
		title: 'Libra',
	},
];

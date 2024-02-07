import peso from '../assets/icons/ARS.svg';
import australianDollar from '../assets/icons/AUD.svg';
import bovespa from '../assets/icons/BOVESPA.svg';
import bitcoin from '../assets/icons/BTC.svg';
import canadianDollar from '../assets/icons/CAD.svg';
import yuan from '../assets/icons/CNY.svg';
import euro from '../assets/icons/EUR.svg';
import ifix from '../assets/icons/IFIX.svg';
import yen from '../assets/icons/JPY.svg';
import libra from '../assets/icons/LIBRA.svg';
import dollar from '../assets/icons/USD.svg';

export const STOCKS_DATA = [
    {
        title: 'Bovespa Index',
        img: bovespa
    },
    {
        title: 'IFIX',
        img: ifix
    },
];

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

export const BASE_CURRENCY = QUOTES_DATA[0];

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
];

export const formatTime = (time) => time > 9 ? time.toString() : `0${time}`;

export const formatDate = (date) => {
	const parsedDate = new Date(Date.parse(date));
	const day = parsedDate.getDate();
	const monthIndex = parsedDate.getMonth();
	const hours = parsedDate.getHours();
	const minutes = parsedDate.getMinutes();
	const monthName = monthNames[monthIndex];

	return `${formatTime(day)} ${monthName} ${formatTime(hours)}:${formatTime(minutes)}`;
};

export const formatCurrencies = (currencies, id) => {
	if (currencies?.data?.[id]) {
		const currencyValue = `$${Number(currencies.data[id].value.toFixed(6))}`;
		return currencyValue;
	}
	return 'Not found';
};

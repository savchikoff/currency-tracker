import monthNames from "../constants/monthNames";

export const formatTime = (time) => time > 9 ? time.toString() : `0${time}`;

const formatDate = (date) => {
	const parsedDate = new Date(Date.parse(date));
	const day = parsedDate.getDate();
	const monthIndex = parsedDate.getMonth();
	const hours = parsedDate.getHours();
	const minutes = parsedDate.getMinutes();
	const monthName = monthNames[monthIndex];

	return `${formatTime(day)} ${monthName} ${formatTime(hours)}:${formatTime(minutes)}`;
};

export default formatDate;

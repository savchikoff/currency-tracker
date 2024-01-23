const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];

export const formatTime = (time) => time > 9 ? time : `0${time}`

export const formatDate = (date) => {
    const parsedDate = new Date(Date.parse(date));
    const day = parsedDate.getDate();
    const monthIndex = parsedDate.getMonth();
    const hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    const monthName = monthNames[monthIndex];

    return `${day} ${monthName} ${formatTime(hours)}:${formatTime(minutes)}`;
}

export const formatCurrencies = (currencies, id, value) => {
    if (currencies?.data?.[id]) {
        const currencyValue = `$${Number(currencies.data[id].value.toFixed(3))}`;
        return currencyValue;
    } 
        return value || "Not found";
    
}
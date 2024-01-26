const MILLISECONDS_DAY = 86400000;

export const getRandomFloat = (min, max) => Math.random() * (max - min) + min

export const randomizeData = (selectedDate, days, min, max) => Array(days).fill({}).map((item, index) => {
    const high = getRandomFloat(min, max);
    const low = getRandomFloat(min, high);
    const open = getRandomFloat(min, high);
    const close = getRandomFloat(min, high);
    return {
        x: new Date(selectedDate + MILLISECONDS_DAY * index),
        y: [open, high, low, close]
    }
});



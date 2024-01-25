const MILLISECONDS_DAY = 86400000;

const getRandomFloat = (min, max) => Math.random() * (max - min) + min

export const randomizeData = (selectedDate, days, min, max) => Array(days).fill({}).map((item, index) => {
        const open = getRandomFloat(min, max);
        const high = getRandomFloat(min, max);
        const low = getRandomFloat(min, max);
        const close = getRandomFloat(min, max);
        return {
            x: new Date(selectedDate + MILLISECONDS_DAY * index),
            y: [open, high, low, close]
        }
    })

export const randomizeExistingData = (data, max, min) => data.map(item => {
        const open = getRandomFloat(min, max);
        const high = getRandomFloat(min, max);
        const low = getRandomFloat(min, max);
        const close = getRandomFloat(min, max);
        return {
            x: item.x,
            y: [open, high, low, close]
        }
    });



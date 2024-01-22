const getData = (key, initialData = {}) => {
    const storage = localStorage.getItem(key);
    if (storage) {
        return JSON.parse(storage);
    }

    return initialData;
}

const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

function isDataValid(data) {
    return data.expirationTime > new Date().getTime();
}

export { getData, saveData, isDataValid };



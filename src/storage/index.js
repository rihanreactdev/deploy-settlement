

export const getSecureData = (key) => {
    try {
        const value = localStorage.getItem(key);
        return value;
    } catch(error) {
        console.log("Error in getSecureData", error);
        throw new Error(error.message);
    }
};

export const setSecureData = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch(error) {
        console.log("Error in setSecureData", error);
        throw new Error(error.message);
    }
};

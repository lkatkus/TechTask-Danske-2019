const getPersonFubar = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                val1: 1,
                val2: 2,
            });
        }, 300);
    });
};

const getFacilityFubar = (valueOne) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                val3: 3,
                val4: 4,
            });
        }, 300);
    });
};

const getExposureFubar = (valueTwo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                val5: 5,
            });
        }, 300);
    });
};

export default {
    getPersonFubar,
    getFacilityFubar,
    getExposureFubar,
};

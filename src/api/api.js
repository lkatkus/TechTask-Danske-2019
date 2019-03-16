const getPersonFubar = (input) => {
    return new Promise((resolve, reject) => {
        resolve({
            val1: 1,
            val2: 2,
        });
    });
};

const getFacilityFubar = (valueOne) => {
    return new Promise((resolve, reject) => {
        resolve({
            val3: 3,
            val4: 4,
        });
    });
};

const getExposureFubar = (valueTwo) => {
    return new Promise((resolve, reject) => {
        resolve({
            val5: 5,
        });
    });
};

export default {
    getPersonFubar,
    getFacilityFubar,
    getExposureFubar,
};

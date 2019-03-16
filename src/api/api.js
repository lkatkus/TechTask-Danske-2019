const getPersonFubar = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                val1: 5,
                val2: 3,
            });
        }, 300);
    });
};

const getFacilityFubar = (valueOne) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                val3: 65,
                val4: 4,
            });
        }, 300);
    });
};

const getExposureFubar = (valueTwo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                val5: 18,
            });
        }, 300);
    });
};

export default {
    getPersonFubar,
    getFacilityFubar,
    getExposureFubar,
};

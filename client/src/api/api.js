import axios from 'axios';

const getPersonFubar = (input) => {
    return new Promise((resolve, reject) => [
        axios.get(`api/person/${input}`)
            .then((res) => {
                return resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    ]);
};

const getFacilityFubar = (valueOne) => {
    return new Promise((resolve, reject) => [
        axios.get(`api/facility/${valueOne}`)
            .then((res) => {
                return resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    ]);
};

const getExposureFubar = (valueTwo) => {
    return new Promise((resolve, reject) => [
        axios.get(`api/exposure/${valueTwo}`)
            .then((res) => {
                return resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    ]);
};

export default {
    getPersonFubar,
    getFacilityFubar,
    getExposureFubar,
};

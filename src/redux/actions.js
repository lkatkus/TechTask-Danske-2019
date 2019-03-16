import Api from 'api/api';

import * as actionTypes from './types';

const beforeGetValues = () => {
    return {
        type: actionTypes.BEFORE_GET_VALUES,
    };
};

const afterGetValues = () => {
    return {
        type: actionTypes.AFTER_GET_VALUES,
    };
};

const afterGetValuesError = (error) => {
    return {
        type: actionTypes.AFTER_GET_VALUES_ERROR,
        payload: error,
    };
};

const setValues = (values) => {
    return {
        type: actionTypes.SET_VALUES,
        payload: values,
    };
};

const getValues = () => {
    return (dispatch) => {
        dispatch(beforeGetValues());

        Api.getPersonFubar()
            .then((personData) => {
                dispatch(setValues(personData));

                return Api.getFacilityFubar();
            })
            .then((facilityData) => {
                dispatch(setValues(facilityData));

                return Api.getExposureFubar();
            })
            .then((exposureData) => {
                dispatch(setValues(exposureData));
                dispatch(afterGetValues());
                // TODO display modal with results
            })
            .catch((error) => {
                dispatch(afterGetValuesError(error.toString()));
            });
    };
};

export default {
    beforeGetValues,
    afterGetValues,
    getValues,
};

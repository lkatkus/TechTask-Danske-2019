import Api from 'api/api';
import modalActions from 'components/modal/redux/actions';

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

const displayResults = () => {
    return (dispatch, getState) => {
        const {
            page: {
                values,
            },
        } = getState();

        dispatch(modalActions.open({
            values,
        }));
    };
};

const getValues = (inputValue) => {
    return (dispatch) => {
        dispatch(beforeGetValues());

        Api.getPersonFubar(inputValue)
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
                dispatch(displayResults());
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

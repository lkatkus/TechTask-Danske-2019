import * as actionTypes from './types';

export const initialState = {
    value: 1,
    submitting: false,
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.BEFORE_SET_VALUE):
            return {
                ...state,
                submitting: true,
            };
        case(actionTypes.SET_VALUE):
            return {
                value: action.payload.value,
            };
    }
    return state;
};

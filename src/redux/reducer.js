import * as actionTypes from './types';

export const initialState = {
    values: null,
    error: null,
    isFetching: false,
    isLoaded: false,
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.BEFORE_GET_VALUES):
            return {
                ...state,
                values: null,
                isFetching: true,
            };
        case(actionTypes.AFTER_GET_VALUES):
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
            };
        case(actionTypes.AFTER_GET_VALUES_ERROR):
            return {
                ...state,
                error: action.payload,
                values: null,
                isFetching: false,
                isLoaded: false,
            };
        case(actionTypes.SET_VALUES):
            return {
                ...state,
                values: {
                    ...state.values,
                    ...action.payload,
                },
            };
    }
    return state;
};

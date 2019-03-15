import * as actionTypes from './types';

export const initialState = {
    value: 1,
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.SET_VALUE):
            return {
                value: action.payload.value,
            };
    }
    return state;
};

import * as actionTypes from './types';

const beforeSetValue = () => {
    return {
        type:actionTypes.BEFORE_SET_VALUE
    }
}

export default {
    beforeSetValue,
}
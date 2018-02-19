import {LOAD, SUCCESS, FAIL} from "./actionTypes";

const initialState = {
    fetching: false,
    data: [],
    offset: 0,
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                fetching: true,
                data: []
            };
            break;
    
        case SUCCESS: {
            const data = action.data;
            return {
                ...state,
                fetching: false,
                data: data.results,
                total: data.total,
                offset: data.offset
            };
            break;
        }

        case FAIL:
            return {
                ...state,
                fetching: false
            };
            break;

        default:
            return state;
            break;
    }
};
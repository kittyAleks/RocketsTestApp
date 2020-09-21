import {LOAD_MORE_ROCKETS, GET_ROCKETS }  from '../types'
import {rocketsAPI} from "../action/rocketsAction";

const initialState = {
    allRockets: [],
    isLoading: false
};

export const rocketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ROCKETS: return {
            ...state,
            allRockets: action.allRockets,
            isLoading: false
        };
        case LOAD_MORE_ROCKETS: return {
            ...state,
            allRockets: [...state.allRockets, ...action.allRockets]
        };

        default:
            return state;
    }
};

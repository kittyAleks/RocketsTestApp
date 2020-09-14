import {LOAD_MORE_ROCKETS }  from '../types'
const GET_ROCKETS = 'GET_ROCKETS';

const initialState = {
    allRockets: [],
    isLoading: false
};

export const rocketsReducer = (state = initialState, action) => {
    console.log('WWW action', action)
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


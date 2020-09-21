import {GET_ROCKETS, LOAD_MORE_ROCKETS} from "../types";
import {rocketsReducer} from "./rocketsReducer";

describe('rocketsReducer', () => {
    const allRockets = [{ name: 'Rocket1' }];

    it('should return initial state', () => {
        const initialState = {
            allRockets: [{ name: 'FalconHeavy' }],
            isLoading: false
        };
        const action = { type: 'UNKNOWN_TYPE' };

        expect(rocketsReducer(initialState, action)).toEqual(initialState);
    });

    it('should get rockets', () => {
        const initialState = {
            allRockets: [{ name: 'BigFalconHeavy' }],
            isLoading: false
        };
        const action = { type: GET_ROCKETS, allRockets };
        const expectedData = { ...initialState, allRockets, isLoading: false };

        expect(rocketsReducer(null, action)).toEqual(expectedData);
    });

    it('should load more rockets', () => {
        const initialState = {
            allRockets: [{ name: 'Falcon 9' }],
            isLoading: false
        };
        const action = { type: LOAD_MORE_ROCKETS, allRockets };
        const expectedData = { ...initialState, allRockets: [...initialState.allRockets, ...action.allRockets] };

        expect(rocketsReducer(initialState, action)).toEqual(expectedData);
    });
});

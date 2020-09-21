import {GET_ROCKETS, LOAD_MORE_ROCKETS} from "../types";
import {getRockets, loadMoreRockets} from "./rocketsAction";

const allRocketsData = [{ name:'Falcon1' }, { name: 'Falcon2' }];

describe('rocketActions', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ apis: allRocketsData }),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });

    // To clear mocked data from memory on every "it"

    it('should return getRockets action and data', () => {
        const page = 1;
        const expectedResult = {
            type: GET_ROCKETS,
            allRockets: allRocketsData
        };

        return getRockets(page).then(data =>
            expect(data).toEqual(expectedResult)
        )
    });

    it('should return loadMoreRockets action and data', () => {
        const page = 1;
        const expectedResult = {
            type: LOAD_MORE_ROCKETS,
            allRockets: allRocketsData
        };

        return loadMoreRockets(page).then(data =>
            expect(data).toEqual(expectedResult)
        )
    })
});

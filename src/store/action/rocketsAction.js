import {GET_ROCKETS, LOAD_MORE_ROCKETS} from '../types'

export const rocketsAPI = {
    async getAllRockets(page = 1) {
        let res = await fetch(`https://api.swaggerhub.com/apis/?limit=10&${page}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        res = await res.json();
        res = res.apis;
        return res;
    }
};

export const getRockets = async (page) => ({
    type: GET_ROCKETS,
    allRockets: await rocketsAPI.getAllRockets(page)
});

export const loadMoreRockets = async (page) => ({
    type: LOAD_MORE_ROCKETS,
    allRockets: await rocketsAPI.getAllRockets(page)
});

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {rocketsReducer} from './reducers/rocketsReducer'
// import thunk from 'redux-thunk';

export default createStore(rocketsReducer, {})
// export default createStore(rocketsReducer, applyMiddleware(thunk));

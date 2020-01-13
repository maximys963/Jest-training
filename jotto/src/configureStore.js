import { createStore, applyMiddleware } from "redux";
import ReduxThunk                       from 'redux-thunk';
import rootReducer                      from './reducer/index';

export const middlewares = [ReduxThunk];

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddlewares(rootReducer);

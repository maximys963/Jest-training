import checkPropTypes  from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer     from '../src/reducer';
import { middlewares } from "../src/configureStore";


export const storeFactory = (initialState) => {
   const createStoreWithMiddleware = applyMiddleware(...middlewares);
   return createStore(rootReducer, initialState);
};


export const findByTestAttr = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`)
};

export const checkProps = (component, confirmingProps) => {
   const propError = checkPropTypes(
       component.propTypes,
       confirmingProps,
       'props',
       component.name
   );
   expect(propError).toBeUndefined()
};

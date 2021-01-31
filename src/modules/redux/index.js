import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import actionTypes from './actionTypes';
/**
 * ======================================
 * REDUCER
 * ======================================
 */
import loading from './loading/reducer';

const reducer = combineReducers({
  loading
});

/**
 * ======================================
 * STORE
 * ======================================
 */
const store = createStore(reducer, applyMiddleware(thunk));

export { store, actionTypes };

/**
 * ======================================
 * ACTION / DISPATCHER
 * ======================================
 */
export * from './loading/action';

/**
 * ======================================
 * SELECTOR
 * ======================================
 */
export * from './loading/selector';

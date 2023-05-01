import { createStore,compose,applyMiddleware,bindActionCreators, combineReducers } from "redux";

const reducer = state => state;

export const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {

    const monitoringReducer = (state, action) => {
        const start = performance.now();
        const newState = reducer(state, action);
        const end = performance.now();
        const diff = Math.round(end - start);
        console.log(diff);
        return newState;
    }

    return createStore(monitoringReducer, initialState, enhancer);
}


const store = createStore(reducer,{}, monitorEnhancer);

store.dispatch({ type: "Hello" });
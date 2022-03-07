import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
// чтобы не строить велосипед и не передовать все редюсеры через запятую
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ необходимо для того чтобы Redux devtools работал корректно в любом случае 

export default store;


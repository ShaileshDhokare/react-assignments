import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import usersSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
sagaMiddleware.run(usersSaga);
export default store;

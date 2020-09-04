import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index';
import { createLogger } from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  // ...options
});
const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
  // hàm để chạy saga
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;

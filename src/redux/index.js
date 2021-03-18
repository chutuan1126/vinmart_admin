import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from '../sagas';

const storeConfig = {
  key: 'root',
  blacklist: [],
  whitelist: ['config'],
  storage,
}


const reducers = combineReducers({
  auth: require('./AuthRedux').reducer,
});

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const persistedReducer = persistReducer(storeConfig, reducers);

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, enhancer);
store.sagaTask = sagaMiddleware.run(rootSaga);
store.__persistor = persistStore(store); // Nasty hack

export default store;
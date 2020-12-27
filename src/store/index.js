import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../redux';
import rootSagas from "../sagas";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initState = {};
const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['AppReducer'] // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

const store = createStore(
    persistedReducer,
    initState,
    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            sagaMiddleware
        )
    ),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

store.subscribe(() => {
    console.log("Store Changed ", store.getState());
});

export default store;

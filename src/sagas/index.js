import { all } from "redux-saga/effects";
import { authenticationSaga } from './authenticationSaga';
import { caseSaga } from "./caseSaga";

export default function* rootSagas() {
    yield all([
        authenticationSaga(),
        caseSaga()
    ])
}

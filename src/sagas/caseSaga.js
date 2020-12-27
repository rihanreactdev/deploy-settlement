import {call, put, takeLatest} from "redux-saga/effects";
import {
    getAllCaseFilesApi,
    registerCaseApi
} from '../api'
import {
    GET_ALL_CASE_FILES_ACTION,
    REGISTER_CASE_ACTION,
    STORE_ALL_CASE_FILES_ACTION
} from "../redux/userDashboard/actionTypes";

function* registerCaseSaga({ payloadData }) {
    try{
        yield call(registerCaseApi, payloadData);
        alert("Case Registered successful");
    } catch(error) {
        console.log("error in registerCaseSaga", error);
        alert(error.message);
    }
}

function* getAllCaseFilesSaga() {
    try{
        const { data } = yield call(getAllCaseFilesApi);
        yield put({ type : STORE_ALL_CASE_FILES_ACTION, caseFiles : []});
    } catch(error) {
        console.log("error in getAllCaseFilesSaga", error);
        alert(error.message);
    }
}

export function* caseSaga() {
    yield takeLatest(REGISTER_CASE_ACTION, registerCaseSaga)
    yield takeLatest(GET_ALL_CASE_FILES_ACTION, getAllCaseFilesSaga)
}

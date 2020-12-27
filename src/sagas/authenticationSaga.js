import {call,put,takeLatest} from "redux-saga/effects";
import {
    registerApi,
    confirmOTPApi,
    loginApi,
    forgotPasswordApi,
    neutraLoginApi,
    neutralForgotPasswordApi, neutralConfirmOTPApi
} from '../api'
import {
    REGISTER_STEP_ONE,
    REGISTER_STEP_TWO,
    REGISTER_STEP_ONE_SUCCESS,
    LOGIN,
    FORGOT_PASSWORD_STEP_ONE,
    FORGOT_PASSWORD_STEP_ONE_SUCCESS, NEUTRAL_LOGIN, FORGOT_PASSWORD_STEP_TWO
} from "../redux/authentication/actionTypes";
import { USER_LOGGED_IN } from "../redux/appReducer/actionTypes";
import {setSecureData} from "../storage";
import { push } from 'connected-react-router'
import {
    NEUTRAL_FORGOT_PASSWORD_STEP_ONE,
    NEUTRAL_FORGOT_PASSWORD_STEP_ONE_SUCCESS,
    NEUTRAL_FORGOT_PASSWORD_STEP_TWO
} from "../redux/authentication/actionTypes";

function* loginSaga({ email, password }) {
    try{
        const { data } = yield call(loginApi, { user_name: email, password });
        setSecureData('token', data.token);
        yield put({type : USER_LOGGED_IN});
        console.log("Login successful");
        yield put(push('/userdashboard/default'));
    } catch(error) {
        console.log("error in loginSaga", error);
        alert(error.message);
    }
}

function* registerStepOneSaga({ name, email }) {
    try{
        yield call(registerApi, { first_name: name, email});
        yield put({type : REGISTER_STEP_ONE_SUCCESS});
        alert("Verification Code has been sent to your Registered Email");
    } catch(error) {
        console.log("error in registerStepOneSaga", error);
        alert("Email already registered.");
    }
}

function* registerStepTwoSaga({ email, otpCode, password }) {
    try{
        yield call(confirmOTPApi, { user_name: email, otp_code: otpCode, password});
        alert("Registered successfully");
    } catch(error) {
        console.log("error in registerStepTwoSaga", error);
        alert(error.message);
    }
}

function* forgotPasswordStepOneSaga({ email }) {
    try {
        yield call(forgotPasswordApi, { user_name: email});
        yield put({type : FORGOT_PASSWORD_STEP_ONE_SUCCESS});
        alert("Verification Code has been sent to your Registered Email");
    } catch(error) {
        console.log("error in forgotPasswordStepOneSaga", error);
        alert(error.message);
    }
}

function* forgotPasswordStepTwoSaga({ email, otpCode, password }) {
    try{
        yield call(confirmOTPApi, { user_name: email, otp_code: otpCode, password});
        alert("Password changed successfully");
    } catch(error) {
        console.log("error in forgotPasswordStepTwoSaga", error);
        alert(error.message);
    }
}

function* neutralLoginSaga({ email, password }) {
    try{
        const { data } = yield call(neutraLoginApi, { user_name: email, password });
        setSecureData('token', data.token);
        console.log("Login successful");
        // yield put(push('/userdashboard/default'));
    } catch(error) {
        console.log("error in neutralLoginSaga", error);
        alert(error.message);
    }
}

function* neutralForgotPasswordStepOneSaga({ email }) {
    try {
        yield call(neutralForgotPasswordApi, { user_name: email});
        yield put({type : NEUTRAL_FORGOT_PASSWORD_STEP_ONE_SUCCESS});
        alert("Verification Code has been sent to your Registered Email");
    } catch(error) {
        console.log("error in neutralForgotPasswordStepOneSaga", error);
        alert(error.message);
    }
}

function* neutralForgotPasswordStepTwoSaga({ email, otpCode, password }) {
    try{
        yield call(neutralConfirmOTPApi, { user_name: email, otp_code: otpCode, password});
        alert("Password changed successfully");
    } catch(error) {
        console.log("error in neutralForgotPasswordStepTwoSaga", error);
        alert(error.message);
    }
}

export function* authenticationSaga() {
    yield takeLatest(LOGIN, loginSaga)
    yield takeLatest(REGISTER_STEP_ONE, registerStepOneSaga)
    yield takeLatest(REGISTER_STEP_TWO, registerStepTwoSaga)
    yield takeLatest(FORGOT_PASSWORD_STEP_ONE, forgotPasswordStepOneSaga)
    yield takeLatest(FORGOT_PASSWORD_STEP_TWO, forgotPasswordStepTwoSaga)
    yield takeLatest(NEUTRAL_LOGIN, neutralLoginSaga)
    yield takeLatest(NEUTRAL_FORGOT_PASSWORD_STEP_ONE, neutralForgotPasswordStepOneSaga)
    yield takeLatest(NEUTRAL_FORGOT_PASSWORD_STEP_TWO, neutralForgotPasswordStepTwoSaga)
}

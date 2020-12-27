import {
    REGISTER_STEP_ONE_SUCCESS,
    RESET_REGISTER_STEP_ONE_SUCCESS,
    FORGOT_PASSWORD_STEP_ONE_SUCCESS,
    RESET_FORGOT_PASSWORD_STEP_ONE_SUCCESS,
    NEUTRAL_FORGOT_PASSWORD_STEP_ONE_SUCCESS,
    RESET_NEUTRAL_FORGOT_PASSWORD_STEP_ONE_SUCCESS
} from './actionTypes'

const INIT_STATE = {
   registerStepOneSuccess: false,
   forgotPasswordStepOneSuccess: false,
   neutralForgotPasswordStepOneSuccess: false
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case REGISTER_STEP_ONE_SUCCESS:
            return { ...state, registerStepOneSuccess: true };

        case RESET_REGISTER_STEP_ONE_SUCCESS:
            return { ...state, registerStepOneSuccess: false };

        case FORGOT_PASSWORD_STEP_ONE_SUCCESS:
            return { ...state, forgotPasswordStepOneSuccess: true };

        case RESET_FORGOT_PASSWORD_STEP_ONE_SUCCESS:
            return { ...state, forgotPasswordStepOneSuccess: false };

        case NEUTRAL_FORGOT_PASSWORD_STEP_ONE_SUCCESS:
            return { ...state, neutralForgotPasswordStepOneSuccess: true };

        case RESET_NEUTRAL_FORGOT_PASSWORD_STEP_ONE_SUCCESS:
            return { ...state, neutralForgotPasswordStepOneSuccess: false };

        default: return { ...state };
    }
}

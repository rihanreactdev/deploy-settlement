import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT
} from '../appReducer/actionTypes'

const INIT_STATE = {
    isLoggedIn : false
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case USER_LOGGED_IN:
            return { ...state, isLoggedIn: true };

        case USER_LOGGED_OUT:
            return { ...state, isLoggedIn: false };

        default: return { ...state };
    }
}

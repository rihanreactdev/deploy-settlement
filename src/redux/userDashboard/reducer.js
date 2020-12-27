import { STORE_ALL_CASE_FILES_ACTION } from './actionTypes'

const INIT_STATE = {
    caseFiles : []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case STORE_ALL_CASE_FILES_ACTION:
            return {
                ...state,
                caseFiles: action.caseFiles
            };

        default: return { ...state };
    }
}

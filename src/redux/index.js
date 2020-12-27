import { combineReducers } from 'redux';
import Authentication from './authentication/reducer';
import AppReducer from './appReducer/reducer';
import UserDashboard from './userDashboard/reducer';
import Customizer from "./customizer/customizer.reducer";
import { connectRouter } from 'connected-react-router/immutable'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    Customizer,
    Authentication,
    AppReducer,
    UserDashboard
});

export default createRootReducer;

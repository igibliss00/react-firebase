import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/type';

const iniState = {
    authError: null
}

const authReducer = (state = iniState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            console.log('Login fail');
            return {
                ...state, 
                authError: 'Login failed'
            };
        case LOGIN_SUCCESS:
            console.log('Login success');
            return {
                ...state,
                authError: null
            };
        case SIGNOUT_SUCCESS:
            console.log('Signout success');
            return state;
        case SIGNUP_SUCCESS:
            console.log('Signup success');
            return {
                ...state,
                authError: null
            };
        case SIGNUP_ERROR:
            console.log('Signout error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
};

export default authReducer;
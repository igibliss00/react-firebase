import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/type';

const iniState = {}

const projectReducer = (state = iniState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            console.log('created project', action.project);
            return state;
        case CREATE_PROJECT_ERROR:
            console.log('error', action.err);
            return state;    
        default:
            return state;
    }
};

export default projectReducer;
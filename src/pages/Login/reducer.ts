import * as actions from './actions';

const initialState = {
    isAuthorized: false
};

function login(state = initialState, action) {
    switch (action.type) {
        case actions.AUTHORIZED:
            return {
                isAuthorized: true
            };
        default:
            return state;
    }
}

export default login;


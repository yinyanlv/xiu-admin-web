import * as actions from './actions';

const initialState = {
    authorized: false,
    userInfo: null
};

export function sessionState(state = initialState, action) {

    switch (action.type) {
        case actions.SET_SESSION:
            return {
                authorized: true,
                userInfo: action.payload
            };
        case actions.REMOVE_SESSION:
            return {
                authorized: false,
                userInfo: null
            };
        default:
            return state;
    }
}

import {createAction} from 'src/utils/createAction';

export const SET_SESSION = 'user:set-user-session';
export const REMOVE_SESSION = 'user:remove-user-session';

export const sessionActionCreator = {
    setSession: (data) => createAction(SET_SESSION, data),
    removeSession: () => createAction(REMOVE_SESSION)
};

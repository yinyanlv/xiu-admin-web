import {ROLES} from 'src/components/Auth';
import {PageLogin} from 'src/pages/Login';
import {PageLoginHook} from 'src/pages/LoginHook';

export const routes = [{
    path: '/login',
    component: PageLogin,
    exact: true,
    auth: ROLES.guest
}, {
    path: '/login-hook',
    component: PageLoginHook,
    exact: true,
    auth: ROLES.guest
}];

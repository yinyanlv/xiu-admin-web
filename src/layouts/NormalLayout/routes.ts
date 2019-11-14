import {ROLES} from 'src/components/Auth';
import {PageLogin} from 'src/pages/Login';
import {PageLoginHook} from 'src/pages/LoginHook';
import {PageError404} from 'src/pages/Error404';

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
}, {
    path: '/404',
    component: PageError404,
    exact: true,
    auth: ROLES.guest
}];

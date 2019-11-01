import {Roles} from 'src/components/Auth/roles';

import {PageLogin} from 'src/pages/Login';
import {PageLoginHook} from 'src/pages/LoginHook';

export const routes = [{
    path: '/login',
    component: PageLogin,
    exact: true,
    auth: Roles.guest
}, {
    path: '/login-hook',
    component: PageLoginHook,
    exact: true,
    auth: Roles.guest
}];

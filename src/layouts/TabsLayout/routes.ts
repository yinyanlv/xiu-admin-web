import {ROLES} from 'src/components/Auth';
import {PageDashboard} from 'src/pages/Dashboard';
import {PageUser} from 'src/pages/User';

export const routes = [{
    path: '/dashboard',
    key: 'dashboard',
    title: 'Dashboard',
    component: PageDashboard,
    exact: true,
    auth: ROLES.staff
}, {
    path: '/user',
    key: 'user',
    title: '用户',
    component: PageUser,
    exact: true,
    auth: ROLES.staff
}];


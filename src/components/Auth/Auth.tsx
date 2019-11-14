import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {matchRoutes} from 'react-router-config';
import {jwtService} from 'src/services/jwtService';
import {routes as normalLayoutRoutes} from 'src/layouts/NormalLayout/routes';
import {routes as tabsLayoutRoutes} from 'src/layouts/TabsLayout/routes';
import {authActionCreator} from './actions';

const allRoutes = [...normalLayoutRoutes, ...tabsLayoutRoutes];

interface AuthProps extends RouteComponentProps, DispatchProp{
    sessionState: any;
}

class Auth extends React.PureComponent<AuthProps> {

    constructor(props) {
        super(props);
        this._jwtCheck();
    }

    state = {
        isRouteMatched: false,
        accessGranted: false
    };

    static getDerivedStateFromProps(props, prevState) {
        const {location: {pathname}, sessionState} = props;
        const matchedRoutes = matchRoutes(allRoutes, pathname);
        let matched;

        if (matchedRoutes.length) {
            matched = matchedRoutes[0];
            const route = matched.route;

            // 该路由未配置权限
            if (!route.auth || route.auth.length === 0) {
                return {
                    isRouteMatched: true,
                    accessGranted: true
                };
            }

            // 验证该用户的权限
            // 用户已登录
            if (sessionState.authorized) {
                if (route.auth.includes(sessionState.userInfo.role)) {
                    return {
                        isRouteMatched: true,
                        accessGranted: true
                    };
                } else {
                    return {
                        isRouteMatched: true,
                        accessGranted: false
                    };
                }
            } else {

                if (route.auth.includes('guest')) {
                    return {
                        isRouteMatched: true,
                        accessGranted: true
                    };
                } else {
                    return {
                        isRouteMatched: true,
                        accessGranted: false
                    };
                }
            }
        } else {
            return {
                isRouteMatched: false,
                accessGranted: false
            };
        }
    }

    componentDidMount(): void {
        if (!this.state.accessGranted) {
            this._redirect();
        }
    }

    componentDidUpdate(prevProps: Readonly<AuthProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (!this.state.accessGranted) {
            this._redirect();
        }
    }

    private _jwtCheck() {

        jwtService.on('authorized', () => {
            this.props.dispatch(authActionCreator.loginWithAccessToken());
        });

        jwtService.on('unauthorized', () => {
            this.props.dispatch(authActionCreator.logout());
        });

        jwtService.init();
    }

    private _redirect() {
        const {history, location} = this.props;
        const {pathname, search, hash} = location;


        if (pathname === '/login' || pathname === '/404') {
            return;
        }

        const state = {
            redirectPathname: pathname,
            redirectSearch: search,
            redirectHash: hash
        };

        if (this.state.isRouteMatched) {
            history.push({
                pathname: '/login',
                state
            });
        } else {
            history.push({
                pathname: '/404',
                state
            });
        }
    }

    render() {
        return (
            <>{this.props.children}</>
        );
    }
}

function mapStateToProps(state) {
    return {
        sessionState: state.sessionState
    };
}

export default withRouter(connect(mapStateToProps)(Auth));

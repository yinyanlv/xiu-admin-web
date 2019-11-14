import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {matchRoutes} from 'react-router-config';
import {jwtService} from 'src/services/jwtService';
import {routes as normalLayoutRoutes} from 'src/layouts/NormalLayout/routes';
import {routes as tabsLayoutRoutes} from 'src/layouts/TabsLayout/routes';

const allRoutes = [...normalLayoutRoutes, ...tabsLayoutRoutes];

interface AuthProps extends RouteComponentProps{
}

class Auth extends React.PureComponent<AuthProps> {

    constructor(props) {
        super(props);

    }

    state = {
        accessGranted: false
    };

    static getDerivedStateFromProps(props, prevState) {
        const {location: {pathname}} = props;
        const matchedRoutes = matchRoutes(allRoutes, pathname);
        let matched;

        if (matchedRoutes.length) {
            matched = matchedRoutes[0];
            return {
                accessGranted: true
            };
        } else {
            return {
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

    private _redirect() {
        const {history, location} = this.props;
        const {pathname, search, hash} = location;

        if (pathname === '/login') {
            return;
        }

        history.push({
            pathname: '/login',
            state: {
                redirectPathname: pathname,
                redirectSearch: search,
                redirectHash: hash
            }
        });
    }

    render() {
        return (
            <>{this.props.children}</>
        );
    }
}

export default withRouter(Auth);

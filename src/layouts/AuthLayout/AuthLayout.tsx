import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './AuthLayout.scss';
import {PageLogin} from 'src/pages/Login';
import {PageLoginHook} from 'src/pages/LoginHook';


class AuthLayout extends React.Component {

    render() {

        return (
            <>
                <Switch>
                    <Route path={"/login"}>
                        <PageLogin />
                    </Route>
                    <Route path={"/login-hook"}>
                        <PageLoginHook />
                    </Route>
                </Switch>
            </>
        );
    }
}

export default AuthLayout;
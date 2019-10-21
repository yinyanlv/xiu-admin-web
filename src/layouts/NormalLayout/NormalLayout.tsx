import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styles from  './NormalLayout.module.scss';
import {PageLogin} from 'src/pages/Login';
import {PageLoginHook} from 'src/pages/LoginHook';

class NormalLayout extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path={"/login"} exact={false}>
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

export default NormalLayout;
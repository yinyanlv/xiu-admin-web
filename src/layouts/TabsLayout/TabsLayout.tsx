import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styles from './TabsLayout.module.scss';
import {Header} from 'src/components/Header';
import {SideNav} from 'src/components/SideNav';
import {PageDashBoard} from 'src/pages/Dashboard';
import {PageUser} from 'src/pages/User';

class TabsLayout extends React.Component {

    render() {

        return (
            <>
                <Header />
                <SideNav />
                <Switch>
                    <Route path={'/tabs/dashboard'}>
                        <PageDashBoard />
                    </Route>
                    <Route path={'/tabs/user'}>
                        <PageUser />
                    </Route>
                </Switch>

            </>
        );
    }
}

export default TabsLayout;
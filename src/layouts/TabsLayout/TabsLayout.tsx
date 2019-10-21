import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import styles from './TabsLayout.module.scss';
import {Header} from 'src/components/Header';
import {SideNav} from 'src/components/SideNav';
import {PageDashBoard} from 'src/pages/Dashboard';
import {PageUser} from 'src/pages/User';

class TabsLayout extends React.Component {

    render() {

        console.log(this.props);
        return (
            <>
                <Header />
                <SideNav />
                <Switch>
                    <Route path={'/dashboard'}>
                        <PageDashBoard />
                    </Route>
                    <Route path={'/user'}>
                        <PageUser />
                    </Route>
                </Switch>
            </>
        );
    }
}

export default withRouter(TabsLayout as any);
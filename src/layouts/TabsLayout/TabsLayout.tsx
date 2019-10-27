import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {Layout} from 'antd';
import styles from './TabsLayout.module.scss';
import {Header} from 'src/components/Header';
import {SideNav} from 'src/components/SideNav';
import {Footer} from 'src/components/Footer';
import {PageDashBoard} from 'src/pages/Dashboard';
import {PageUser} from 'src/pages/User';

class TabsLayout extends React.Component {

    render() {

        console.log(this.props);
        return (
            <Layout>
                <SideNav />
                <Layout className={styles.mainContainer}>
                    <Header />
                    <Layout.Content className={styles.contentContainer}>
                        <Switch>
                            <Route path={'/dashboard'}>
                                <PageDashBoard />
                            </Route>
                            <Route path={'/user'}>
                                <PageUser />
                            </Route>
                        </Switch>
                        <Footer></Footer>
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(TabsLayout as any);
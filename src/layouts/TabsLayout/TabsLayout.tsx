import React from 'react';
import {Switch, Route, withRouter, Link} from 'react-router-dom';
import {Layout, Tabs} from 'antd';
import styles from './TabsLayout.module.scss';
import {AppContext} from 'src/AppContext';
import {Header} from 'src/components/Header';
import {SideNav} from 'src/components/SideNav';
import {Footer} from 'src/components/Footer';
import {RouteTabs} from 'src/components/RouteTabs';
import {PageDashboard} from 'src/pages/Dashboard';
import {PageUser} from 'src/pages/User';

const items = [{
    path: '/dashboard',
    key: 'dashboard',
    title: 'Dashboard',
    component: PageDashboard
}, {
    path: '/user',
    key: 'user',
    title: '用户',
    component: PageUser
}];

interface TabsLayoutProps {
    toggleSideNav: () => void;
}

class TabsLayout extends React.PureComponent<TabsLayoutProps> {

    static contextType = AppContext;

    render() {
        const {toggleSideNav} = this.props;
        const {isSideNavCollapsed} = this.context;

        return (
            <Layout>
                <SideNav />
                <Layout className={styles.mainContainer}>
                    <Header toggleSideNav={toggleSideNav} isSideNavCollapsed={isSideNavCollapsed} />
                    <Layout.Content className={styles.contentContainer}>
                        <div className={styles.innerContentContainer}>
                            <RouteTabs items={items}  />
                        </div>
                        <Footer></Footer>
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default TabsLayout;

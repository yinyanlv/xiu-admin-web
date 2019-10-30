import React from 'react';
import {Layout} from 'antd';
import classnames from 'classnames';
import styles from './TabsLayout.module.scss';
import {AppContext} from 'src/AppContext';
import {Header} from 'src/components/Header';
import {SideNav} from 'src/components/SideNav';
import {Footer} from 'src/components/Footer';
import {RouteTabs} from 'src/components/RouteTabs';
import {PageDashboard} from 'src/pages/Dashboard';
import {PageUser} from 'src/pages/User';
import {Notice} from 'src/components/Notice';

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

}

class TabsLayout extends React.PureComponent<TabsLayoutProps> {

    static contextType = AppContext;

    render() {
        const {isSideNavCollapsed, isShowNotice, toggleSideNav, controlNotice} = this.context;

        return (
            <Layout>
                <SideNav />
                <Layout className={classnames(styles.mainContainer, {
                    [styles.sideNavCollapsed]: isSideNavCollapsed
                })}>
                    <Header
                        toggleSideNav={toggleSideNav}
                        isSideNavCollapsed={isSideNavCollapsed}
                        controlNotice={controlNotice}
                    />
                    <Layout.Content className={styles.contentContainer}>
                        <div className={styles.innerContentContainer}>
                            <RouteTabs items={items}  />
                        </div>
                        <Footer></Footer>
                    </Layout.Content>
                </Layout>
                <Notice isShow={isShowNotice} controlNotice={controlNotice}  />
            </Layout>
        );
    }
}

export default TabsLayout;

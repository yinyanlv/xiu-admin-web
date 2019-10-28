import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {Layout, Tabs} from 'antd';
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
                        <div className={styles.innerContentContainer}>
                            <Tabs type={'card'} style={{
                                marginTop: '12px'
                            }}>
                                <Tabs.TabPane closable={true} tab={'页面一'} key={'1'}>1</Tabs.TabPane>
                                <Tabs.TabPane closable={true} tab={'页面二'}  key={'2'}>2</Tabs.TabPane>
                                <Tabs.TabPane closable={true} tab={'页面三'} key={'3'}>3</Tabs.TabPane>
                            </Tabs>
                            <Switch>
                                <Route path={'/dashboard'}>
                                    <PageDashBoard />
                                </Route>
                                <Route path={'/user'}>
                                    <PageUser />
                                </Route>
                            </Switch>
                        </div>
                        <Footer></Footer>
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(TabsLayout as any);
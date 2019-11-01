import React from 'react';
import {Provider as KeepAliveProvider, KeepAlive} from 'react-keep-alive';
import {Tabs} from 'antd';
import {Route, RouteComponentProps, withRouter} from "react-router-dom";
import styles from './RouteTabs.module.scss';

interface RouteTabsProps extends RouteComponentProps{
    routes: any[]
}

class RouteTabs extends React.Component<RouteTabsProps> {

    onEdit = (targetKey, action) => {
        console.log(targetKey);
        console.log(action);
    };

    onTabClick = (targetKey, e) => {
        const item = this.props.routes.filter((item) => {
            if (item.key === targetKey) {
                return true;
            } else {
                return false;
            }
        });
        this.props.history.push(item[0].path);
    };

    render() {
        const {routes, location} = this.props;
        const activeTabKey = location.pathname.slice(1).replace(/\//g, ':');

        return (
            <KeepAliveProvider>
                <Tabs type={'editable-card'}
                      className={styles.tabsContainer}
                      onEdit={this.onEdit}
                      onTabClick={this.onTabClick}
                      activeKey={activeTabKey}
                >
                    {
                        routes.map((item) =>{
                            return (
                                <Tabs.TabPane closable tab={item.title} key={item.key}>
                                    <Route path={item.path} exact>
                                        <KeepAlive name={item.key}>
                                            <item.component />
                                        </KeepAlive>
                                    </Route>
                                </Tabs.TabPane>
                            );
                        })
                    }
                </Tabs>
            </KeepAliveProvider>
        );
    }
}

export default withRouter(RouteTabs);

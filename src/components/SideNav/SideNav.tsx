import React from 'react';
import {NavLink, RouteComponentProps, withRouter} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import {AppContext} from 'src/AppContext';
import {ScrollBar} from 'src/components/ScrollBar';
import styles from './SideNav.module.scss';

interface SideNavProps extends  RouteComponentProps {
}

class SideNav extends React.PureComponent<SideNavProps> {

    static contextType = AppContext;

    render() {
        const {location} = this.props;
        const context = this.context;
        const activeTabKey = location.pathname.slice(1).replace(/\//g, ':');

        return (
            <Layout.Sider
                theme={'light'}
                width={256}
                className={styles.sideNavContainer}
                collapsed={context.isSideNavCollapsed}
            >
                <div className={styles.logoContainer}>
                    <span className="title">{context.isSideNavCollapsed ? 'XIU' : 'XIU后台管理系统'}</span>
                </div>
                <div className={styles.menuContainer} >
                    <ScrollBar options={{
                        suppressScrollX: true
                    }} style={{width: 256}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['dashboard']}
                            defaultOpenKeys={['statistics']}
                            selectedKeys={[activeTabKey]}
                        >
                            <Menu.Item key="dashboard">
                                <NavLink to={'/dashboard'}>
                                    <Icon type="dashboard"/>
                                    <span>Dashboard</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="user">
                                <NavLink to={'/user'}>
                                    <Icon type="user"/>
                                    <span>用户</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.SubMenu
                                key="statistics"
                                title={
                                    <span>
                                      <Icon type="code-o"/>
                                      <span>统计</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="visit">
                                    <NavLink to={'/count'}>
                                        访问统计
                                    </NavLink>
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </ScrollBar>
                </div>
            </Layout.Sider>
        );
    }
}

export default withRouter(SideNav);

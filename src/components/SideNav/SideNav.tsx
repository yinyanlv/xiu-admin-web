import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import {ScrollBar} from 'src/components/ScrollBar';
import styles from './SideNav.module.scss';

const SubMenu = Menu.SubMenu;

class SideNav extends React.PureComponent {

    handleClick = () => {
    };

    render() {
        return (
            <Layout.Sider theme={'light'} width={256} className={styles.sideNavContainer}>
                <div className={styles.logoContainer}>
                    <span className="title">XIU后台管理系统</span>
                </div>
                <div className={styles.menuContainer}>
                    <ScrollBar options={{
                        suppressScrollX: true
                    }}>
                        <Menu
                            onClick={this.handleClick}
                            mode="inline"
                            openKeys={['statistics']}
                        >
                            <Menu.Item key="dashboard">
                              <Link to={'/dashboard'}>
                                  <Icon type="dashboard"/>
                                  <span>Dashboard</span>
                              </Link>
                            </Menu.Item>
                            <Menu.Item key="user">
                              <Link to={'/user'}>
                                  <Icon type="user"/>
                                  <span>用户</span>
                              </Link>
                            </Menu.Item>
                            <SubMenu
                                key="statistics"
                                title={
                                    <span>
                                      <Icon type="code-o"/>
                                      <span>统计</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="visit">访问统计</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </ScrollBar>
                </div>
            </Layout.Sider>
        );
    }
}

export default SideNav;
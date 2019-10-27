import React from 'react';
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
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"

                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                  <Icon type="mail"/>
                                  <span>Navigation One</span>
                                </span>
                                }
                            >
                                <Menu.ItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="Item 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                      <Icon type="appstore"/>
                                      <span>Navigation Two</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </ScrollBar>
                </div>
            </Layout.Sider>
        );
    }
}

export default SideNav;
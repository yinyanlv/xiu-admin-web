import React from 'react';
import {Layout, Icon, Menu, Avatar, Badge} from 'antd';
import classnames from 'classnames';
import styles from './Header.module.scss';

interface HeaderProps {
    toggleSideNav: () => void;
    controlNotice: (isShow: boolean) => void;
    isSideNavCollapsed: boolean;
}

class Header extends React.PureComponent<HeaderProps> {

    showNotice = () => {
        this.props.controlNotice(true);
    };

    render() {
        const {toggleSideNav, isSideNavCollapsed} = this.props;

        return (
            <Layout.Header className={classnames(styles.header, {
                [styles.sideNavCollapsed]: isSideNavCollapsed
            })}>
                <div className={styles.button} onClick={toggleSideNav}>
                    <Icon type={isSideNavCollapsed ? 'menu-unfold' : 'menu-fold'} />
                </div>
                <div className={styles.operationContainer}>
                    <div onClick={this.showNotice}>
                        <Badge className={styles.notice}
                               dot
                               offset={[-10, 10]}
                        >
                            <Icon type={'bell'} />
                        </Badge>
                    </div>
                    <Menu key={'user'} mode={'horizontal'}>
                        <Menu.SubMenu title={
                            <>
                                <span style={{
                                    marginRight: '5px'
                                }}>管理员</span>
                                <Avatar></Avatar>
                            </>
                        }>
                            <Menu.Item>
                                退出登录
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </div>
            </Layout.Header>
        );
    }
}

export default Header;

import React from 'react';
import {Layout, Icon, Menu, Avatar, Popover, Badge} from 'antd';
import styles from './Header.module.scss';

const SubMenu = Menu.SubMenu;

class Header extends React.PureComponent<any> {
    render() {
        return (
            <Layout.Header className={styles.header}>
                <div className={styles.button}>
                    <Icon type={'menu-unfold'} />
                </div>
                <div className={styles.operationContainer}>
                    <Popover>
                        <Badge className={styles.notice}
                               dot
                               offset={[-10, 10]}
                        >
                            <Icon type={'bell'} />
                        </Badge>
                    </Popover>

                    <Menu key={'user'} mode={'horizontal'}>
                        <SubMenu title={
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
                        </SubMenu>
                    </Menu>
                </div>
            </Layout.Header>
        );
    }
}

export default Header;
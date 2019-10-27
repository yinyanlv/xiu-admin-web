import React from 'react';
import {Layout, Icon} from 'antd';
import styles from './Header.module.scss';

class Header extends React.PureComponent<any> {
    render() {
        return (
            <Layout.Header className={styles.header}>
                <div className={styles.button}>
                    <Icon type={'menu-unfold'} />
                </div>
                <div>Header</div>
            </Layout.Header>
        );
    }
}

export default Header;
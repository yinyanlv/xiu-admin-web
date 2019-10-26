import React from 'react';
import {Layout} from 'antd';
import styles from './SideNav.module.scss';

class SideNav extends React.PureComponent {
    render() {
        return (
            <Layout.Sider>
                <div>Side Nav</div>
            </Layout.Sider>
        );
    }
}

export default SideNav;
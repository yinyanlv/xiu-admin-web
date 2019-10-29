import React from 'react';
import {Layout} from 'antd';
import styles from './Footer.module.scss';

class Footer extends React.PureComponent {
    render() {
        return (
            <Layout.Footer className={styles.footer}>xiu © 2019</Layout.Footer>
        );
    }
}

export default Footer;
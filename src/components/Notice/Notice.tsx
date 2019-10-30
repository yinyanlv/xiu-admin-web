import React from 'react';
import {Drawer, Skeleton} from 'antd';
import styles from './Notice.module.scss';

interface NoticeProps {
    controlNotice: (isShow: boolean) => void;
    isShow: false;
}

class Notice extends React.PureComponent<NoticeProps> {

    hideNotice = () => {
        this.props.controlNotice(false);
    };

    render() {
        return (
            <>
                <Drawer
                    title={'通知'}
                    placement={'right'}
                    closable={true}
                    visible={this.props.isShow}
                    onClose={this.hideNotice}
                >
                 <Skeleton active paragraph={{
                     rows: 10
                 }}></Skeleton>
                </Drawer>
            </>
        );
    }
}

export default Notice;

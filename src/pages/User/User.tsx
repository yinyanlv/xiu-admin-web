import React from 'react';
import {Table, Form, Input, Icon} from 'antd';
import styles from './User.module.scss';

export class PageUser extends React.PureComponent {
    render() {
        const columns = [{
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
        }, {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime'
        }];

        return (
            <>
                <div>
                    <form>
                        <Form.Item label={'用户名'} labelAlign={'right'}>
                            <Input prefix={<Icon type="lock" />}
                            />
                        </Form.Item>
                    </form>
                </div>
                <div>

                    <Table columns={columns} pagination={{
                        pageSize: 20,
                        total: 200
                    }}>
                    </Table>
                </div>
            </>
        );
    }
}

export default PageUser;
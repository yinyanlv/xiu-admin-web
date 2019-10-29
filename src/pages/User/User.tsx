import React from 'react';
import {Table, Form, Input, Icon, Row, Col, Button} from 'antd';
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
                <div className={styles.queryPanel}>
                    <Form>
                        <Row gutter={24}>
                            <Col span={6}>
                                <Form.Item label={'用户名'} labelCol={{span: 6}} wrapperCol={{span: 18}}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label={'邮箱'} labelCol={{span: 6}} wrapperCol={{span: 18}}>
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                           <div className={styles.buttonLine}>
                               <Button type={'primary'}>查询</Button>
                               <Button>重置</Button>
                           </div>
                        </Row>
                    </Form>
                </div>
                <div className={styles.tablePanel}>
                    <Table
                        columns={columns}
                        bordered={true}
                        pagination={{
                        pageSize: 20,
                        total: 200
                        }}
                    >
                    </Table>
                </div>
            </>
        );
    }
}


export default PageUser;

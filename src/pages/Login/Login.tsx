import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {Button, Row, Form, Input, Icon, Checkbox} from 'antd';
import {FormComponentProps} from 'antd/lib/form/Form';
import styles from './Login.module.scss';

interface PageLoginProps extends FormComponentProps, RouteComponentProps{
}

class PageLogin extends React.PureComponent<PageLoginProps> {

    handleSubmit = (e: any) => {
        e.preventDefault();
        const {validateFields} = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.history.push('/');
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div className={styles.loginBox}>
                <div className={styles.logoLine}>
                    <span>xiu管理系统</span>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Form.Item hasFeedback>
                            {
                                getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: '用户名为必填项'
                                    }]
                                })(
                                    <Input prefix={<Icon type="user" style={{color: styles.iconColor}} />}
                                           placeholder="请输入用户名"
                                           onPressEnter={this.handleSubmit}
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item hasFeedback >
                            {
                                getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: '密码为必填项目'
                                    }]
                                })(
                                    <Input prefix={<Icon type="lock" style={{color: styles.iconColor}} />}
                                           type="password"
                                           placeholder="请输入密码"
                                           onPressEnter={this.handleSubmit}
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item className={styles.rememberLine}>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )
                            }
                        </Form.Item>
                        <Row className={styles.buttonLine}>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </Row>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Form.create<PageLoginProps>()(PageLogin) as any);

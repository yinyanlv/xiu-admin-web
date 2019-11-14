import React from 'react';
import {connect} from 'react-redux';
import {RouteConfigComponentProps} from 'react-router-config';
import {Button, Row, Form, Input, Icon, Checkbox, Alert} from 'antd';
import {FormComponentProps} from 'antd/lib/form/Form';
import styles from './Login.module.scss';
import {loginActionCreator} from './actions';

interface PageLoginProps extends FormComponentProps, RouteConfigComponentProps {
    loginState: any;
    dispatch: Function;
}

class PageLogin extends React.PureComponent<PageLoginProps> {

    handleSubmit = (e: any) => {
        e.preventDefault();
        const {validateFields} = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(loginActionCreator.request(values));
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
                {
                    this.props.loginState.errorMessage && <Alert className={styles.errorLine} message={this.props.loginState.errorMessage} type="error" showIcon />
                }
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

function mapStateToProps({loginState}) {
    return {
        loginState
    };
}

export default connect(mapStateToProps)(Form.create<PageLoginProps>()(PageLogin));

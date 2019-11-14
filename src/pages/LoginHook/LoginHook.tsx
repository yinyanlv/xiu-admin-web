import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './LoginHook.module.scss';
import {Alert, Button, Checkbox, Form, Icon, Input, Row} from 'antd';
import {FormComponentProps} from 'antd/lib/form/Form';
import * as actions from './actions';

function PageLoginHook(props: FormComponentProps) {
    const {getFieldDecorator} = props.form;
    const login = useSelector((state: any) => {
        return state.login;
    });
    const dispatch = useDispatch();

    function handleSubmit(e: any)  {
        e.preventDefault();
        const {validateFields} = props.form;

        validateFields((err, values) => {
            if (!err) {
                dispatch(actions.doLogin(values));
            }
        });
    }

    return (
        <div className={styles.loginBox}>
            <div className={styles.logoLine}>
                <span>xiu管理系统 hooks</span>
            </div>
            {
                login.errorMessage && <Alert className={styles.errorLine} message={login.errorMessage} type="error" showIcon />
            }
            <div>
                <form onSubmit={handleSubmit}>
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
                                       onPressEnter={handleSubmit}
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
                                       onPressEnter={handleSubmit}
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
                        <Button type="primary" onClick={handleSubmit}>登录</Button>
                    </Row>
                </form>
            </div>
        </div>
    );
}

export default Form.create()(PageLoginHook);

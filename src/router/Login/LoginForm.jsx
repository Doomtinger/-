import React, {Component} from 'react'
import antd from 'antd'
const { Form, Icon, Input, Button, Checkbox } = antd
class LoginForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            focusItem: -1,
            code: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            //调用父组件传递的方法
            this.props.login(values)
          }
        });
    };
    register = () => {
        this.props.switchShowBox('register')
        setTimeout(() => this.props.form.resetFields(), 500)
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={this.props.className}>
                <h3 className="title">管理员登录</h3>
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            {/* Or <span onClick={this.register}>register now!</span> */}
                        </Form.Item>
                    </Form>
                </div>
                <p className="footer-title">欢迎登录后台管理系统</p>
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create()(LoginForm);
export default WrappedRegistrationForm;
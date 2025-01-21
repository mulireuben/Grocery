import { Button, Card, Checkbox, Input } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '@ant-design/compatible';

const Login = (props) => {
  const [inputs, setInputs] = useState({ name: '', password: '' });
  const { getFieldDecorator } = props.form;
  const navigate = useNavigate();
  //   const formItemLayout = {
  //     labelCol: { span: 24 },
  //     wrapperCol: { span: 24 },
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Login values:', values);
      }
      const loggedUser = JSON.parse(localStorage.getItem('user'));
      console.log('loggedUser:', loggedUser);

      if (
        values.username === loggedUser.name &&
        values.password === loggedUser.password
      ) {
        console.log('am logged in');
        localStorage.setItem('loggedin', true);
        navigate('/');
      } else {
        return alert('Invalid username/password');
      }
    });
  };
  const handleNavigation = () => {
    navigate('/signup');
  };
  return (
    <div className='container'>
      <Card className='card2' style={{ height: '50vh' }}>
        <Form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <Form.Item label='Username'>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                style={{ width: '100%', height: '5vh', borderRadius: '10px' }}
                // prefix={
                //   <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                // }
                placeholder='Username'
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    [e.target.username]: e.target.username,
                  });
                }}
              />
            )}
          </Form.Item>
          <Form.Item label='Password'>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                // prefix={
                //   <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                // }
                type='password'
                placeholder='Password'
                style={{ width: '100%', height: '5vh', borderRadius: '10px' }}
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    [e.target.password]: e.target.password,
                  });
                }}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className='login-form-forgot' href=''>
              Forgot password
            </a>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Log in
            </Button>
            Or{' '}
            <a href='' onClick={handleNavigation}>
              register now!{' '}
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
Login.propTypes = {
  form: PropTypes.object.isRequired,
};

const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login);

export default WrappedNormalLoginForm;

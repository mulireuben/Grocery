import { Button, Card, Checkbox, Col, Divider, Input, Row } from 'antd';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '@ant-design/compatible';

const Signup = (props) => {
  const { getFieldDecorator } = props.form;
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState({ name: '', email: '', password: '' });
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const handleSubmit = (e, value) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('values are:', values);
        localStorage.setItem('user', JSON.stringify(input));
        navigate('/login');
      }
    });
    console.log(value);
  };
  const handleNavigation = () => {
    navigate('/login');
  };
  return (
    <div className='container'>
      <Card size='large' className='card' style={{ height: '100vh' }}>
        <Form onSubmit={handleSubmit}>
          <h1>Get Started Now</h1>
          <Form.Item label='Name'>
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                name='name'
                style={{ width: '100%', height: '5vh', borderRadius: '10px' }}
                value={input.name}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                  console.log('e:', e.target.value);
                }}
              />
            )}
          </Form.Item>
          <Form.Item label='Email'>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'username is required' }],
            })(
              <Input
                name='email'
                style={{ width: '100%', height: '5vh', borderRadius: '10px' }}
                value={input.email}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
              />
            )}
          </Form.Item>
          <Form.Item label='Password ' {...formItemLayout}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'username is required' }],
            })(
              <Input
                name='password'
                style={{ width: '100%', height: '5vh', borderRadius: '10px' }}
                value={input.password}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>I Agree To Terms And Conditions</Checkbox>)}
          </Form.Item>

          <Button
            type='primary'
            htmlType='submit'
            style={{
              width: '100%',
              borderRadius: '10px',
              height: '5vh',
              color: 'green',
              marginBottom: '20px',
            }}
          >
            SIGN UP
          </Button>

          <Divider orientation='left'>Or</Divider>
          <Row style={{ marginTop: '30px' }}>
            <Col>
              <Button>Sign in with Google</Button>
            </Col>
            <Col>
              <Button>sign in with Apple</Button>
            </Col>
          </Row>
          <Row>
            <p>
              Have an account?{' '}
              <a href='' onClick={handleNavigation}>
                signin{' '}
              </a>
            </p>
          </Row>
        </Form>
      </Card>
    </div>
  );
};
Signup.propTypes = {
  form: PropTypes.object.isRequired,
};

const WrappedNormalLoginForm = Form.create({ name: 'Signup' })(Signup);

export default WrappedNormalLoginForm;

import emailjs from '@emailjs/browser';
import './contact.css';
import { Button, Input } from 'antd';
import { Form } from '@ant-design/compatible';
import TextArea from 'antd/es/input/TextArea';
import Icon from '@ant-design/icons/lib/components/Icon';
const AppContact = (props) => {
  const handleSubmit = (values, e) => {
    e.preventDefault();

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };
    emailjs
      .sendForm('service_9swgvvl', 'template_bwcdbpm', templateParams, {
        publicKey: 'dtu4jCia61shjlVxMDggP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  const { getFieldDecorator } = props.form;
  return (
    <div className='block contactPage'>
      <div className='container'>
        <h2>Contact</h2>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          autoComplete='off'
          layout='vertical'
          size='large'
          onFinish={handleSubmit} // Use onFinish instead of onSubmit
        >
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Username'
              />
            )}
          </Form.Item>
          <Form.Item label='E-mail'>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item
            name='message'
            label='Message'
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}
          >
            <TextArea />
          </Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

const WrappedAppContact = Form.create({ name: 'normal_login' })(AppContact);
export default WrappedAppContact;

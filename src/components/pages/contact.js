import emailjs from '@emailjs/browser';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

function AppContact() {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleSubmit = (formValues) => {
    const serviceId = 'service_iradodn';
    const templateId = 'template_amhlq8i';
    const publicKey = 'lQ9qVMGoJJz-gBJxJ';

    const templateParams = {
      from_name: formValues.fullname,
      to_name: 'Reuben',
      from_email: formValues.email,
      message: formValues.message,
      reply_to: formValues.email,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
      })
      .catch((error) => console.log('Error', error));
  };

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
          onFinish={handleSubmit}  // Use onFinish instead of onSubmit
        >
          <Form.Item
            label='Full name'
            name='fullname'
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
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
}

export default AppContact;

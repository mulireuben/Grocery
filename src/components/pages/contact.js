import emailjs from '@emailjs/browser';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const { TextArea } = Input;

function AppContact() {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleSubmit = async(formValues) => {
    
    console.log(values);
    
    const serviceId = 'service_cotx088';
    const templateId = 'template_bwcdbpm';
    const publicKey = '0LhXgLoOeukYC6BTA';
    
    const { fullname, email, message } = formValues;
try{
    const data={
      service_Id: serviceId,
      template_Id: templateId,
      user_id: publicKey,
      template_params:{
        from_name: fullname,
        from_email: email,
        to_name: 'Reuben',
        message: message,

      }
    }

    
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data);
      console.log(res);
      setValues({
        fullname: '',
        email: '',
        message: ''
      });
    }
   
    catch(err){
      console.log(err)
    }

    // const templateParams = {
    //   from_name: formValues.fullname,
    //   to_name: 'Reuben',
    //   from_email: formValues.email,
    //   message: formValues.message,
    //   reply_to: formValues.email,
    // };

    // emailjs.send(serviceId, templateId, templateParams, publicKey)
    //   .then((response) => {
    //     console.log('Email sent successfully', response);
    //   })
    //   .catch((error) => console.log('Error', error));
  };
  // console.log(e)


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
            onChange={(e)=>setValues(e.target.value)}
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
            onChange={(e)=>setValues(e.target.value)}
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
            onChange={(e)=>setValues(e.target.value)}
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

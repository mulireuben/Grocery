import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

function AppContact() {
  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );
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
        >
          <Form.Item
            label='Full name'
            name='fullname'
            rules={[
              {
                required: true,
                message: ' please input your name!',
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
                message: ' please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='phone'
            label='Phone Number'
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item
            name='Message'
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

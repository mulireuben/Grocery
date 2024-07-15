import {
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  MobileOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';

function AppHeader() {
  return (
    <div className='container'>
      <div className='topBar'>
        <div className='contactInfo'>
          <ul>
            <li>
              {' '}
              <a href='tel:0708377276'>
                <span>
                  <MobileOutlined />
                  0708377276
                </span>
              </a>
            </li>
            <li>
              {' '}
              <a href='mailto:mulireuben57@gmail.com'>
                <span>
                  {' '}
                  <MailOutlined /> mulireuben57@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className='otherInfo'>
          <ul className='socialMedia'>
            <li>
              <a href='https://www.facebook.com'>
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com'>
                <TwitterSquareFilled />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com'>
                <InstagramFilled />
              </a>
            </li>
          </ul>
          <Button>
            <UserOutlined />
            My Account
          </Button>
        </div>
      </div>
      <div className='header separator'>
        <div className='logo'>S.O.S Grocery </div>
      </div>
    </div>
  );
}

export default AppHeader;

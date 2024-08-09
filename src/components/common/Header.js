import { NavLink } from 'react-router-dom';
import {
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  MenuOutlined,
  MobileOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useState } from 'react';

function AppHeader() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
        <div className='mobileVisibility'>
          <Button type='primary' onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer title='Basic Drawer' onClose={onClose} open={open}>
            <nav>
              <ul>
                <li>
                  <NavLink onClick={onClose} to='/'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to='/About'>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to='/Shop'>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to='/Faq'>
                    Faq
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={onClose} to='/Contact'>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Drawer>
        </div>
        <nav className='mobileHidden'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/About'>About</NavLink>
            </li>
            <li>
              <NavLink to='/Shop'>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/Faq'>Faq</NavLink>
            </li>
            <li>
              <NavLink to='/Contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;

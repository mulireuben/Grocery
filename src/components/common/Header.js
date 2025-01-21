import { NavLink } from 'react-router-dom';
import Icon, {
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
import { useNavigate } from 'react-router-dom';

function AppHeader() {
  const [open, setOpen] = useState(false);
  // const [user,setUser]=useState()
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem('user'));

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const navigateToAuth = () => {
    navigate('/signup');
  };
  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    navigate('/login');
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
          {username ? (
            <div style={{ alignItems: 'horizontal' }}>
              {' '}
              <Button>Welcome {username.name} </Button>
              <Button>
                {' '}
                <Icon
                  type='logout'
                  style={{ backgroundColor: 'yellow' }}
                  onClick={handleLogout}
                />
              </Button>
            </div>
          ) : (
            <Button onClick={navigateToAuth}>
              <UserOutlined />
              My Account
            </Button>
          )}
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

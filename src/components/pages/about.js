import { Tabs } from 'antd';
import aboutBanner from '../../assets/images/aboutBanner.jpg';
import TabPane from 'antd/es/tabs/TabPane';
function AppAbout() {
  return (
    <div className='block aboutPage'>
      <div className='container'>
        <h2>About</h2>
        <div className='bannerImage'>
          <img src={aboutBanner} alt='banner' />
          <Tabs defaultActiveKey='1'>
            <TabPane tab='about' key='1'>
              <p>
                {' '}
                we are passionate about providing our customers with the highest
                quality groceries and exceptional service. ,
              </p>{' '}
              <p>
                {' '}
                we have been serving the community with a commitment to
                freshness, variety, and value. Our Mission To offer a diverse
                selection of fresh, locally-sourced, and premium groceries. To
                create a shopping experience that is convenient, friendly, and
                customer-focused. To contribute positively to the community and
                environment through sustainable practices.
              </p>
            </TabPane>
            <TabPane tab='investors' key='2'>
              <p>
                Thank you for considering an investment in [Your Grocery Shop
                Name]. We are dedicated to growth, sustainability, and expanding
                our reach within the community. Here’s why investing in us is a
                great opportunity:
              </p>
            </TabPane>
            <TabPane tab='careers' key='3'>
              <p>
                Are you passionate about food, customer service, and making a
                difference in your community? Consider a career with [Your
                Grocery Shop Name]! We offer a supportive work environment,
                opportunities for growth, and competitive benefits.
              </p>
              <p>
                Why Work With Us? Opportunities for career advancement and
                professional development. Competitive wages and employee
                benefits package. A positive and inclusive workplace culture
                that values teamwork and innovation.
              </p>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AppAbout;

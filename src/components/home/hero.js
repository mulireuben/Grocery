import { Carousel, Col, Row } from 'antd';
import React from 'react';
import Image1 from '../../assets/images/banner-img1.jpg';
import Image2 from '../../assets/images/banner-img2.jpg';
import Image3 from '../../assets/images/banner-img3.jpg';

const Hero = () => {
  return (
    <div className='heroBlock'>
      <Row gutter={[24, 24]}>
        {/* couserol */}
        <Col xs={24} lg={18}>
          <Carousel autoplay autoplaySpeed={1500}>
            <div>
              <img src={Image1} alt='banner1' />
            </div>
            <div>
              <img src={Image2} alt='banner2' />
            </div>
            <div>
              <img src={Image3} alt='banner3' />
            </div>
          </Carousel>
        </Col>
        {/* information block? */}
        <Col xs={24} lg={6}>
          <div className='heroBlocks'>
            <div className='holder'>
              <div className='icon'>
                <i class='fa-solid fa-truck'></i>
              </div>
              <div className='content'>
                <h3>Free Shipping &amp Return</h3>
                <p>Free Shipping on orders over $24</p>
              </div>
            </div>
            <div className='holder'>
              <div className='icon'>
                <i class='fa-solid fa-headset'></i>
              </div>
              <div className='content'>
                <h3>Online support 24/7</h3>
                <p>guider online support services</p>
              </div>
            </div>
            <div className='holder'>
              <div className='icon'>
                <i class='fa-solid fa-sack-dollar'></i>
              </div>
              <div className='content'>
                <h3>Money bank Quarantee</h3>
                <p>100% money bank transfer</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;

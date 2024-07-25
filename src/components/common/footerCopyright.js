import React from 'react';
import payment from '../../../src/assets/images/payment.png';
import { BackTop } from 'antd';

const FooterCopyright = () => {
  return (
    <div className='footerCopyright'>
      <div className='container'>
        <div className='copyright'>@2024 created by mr reuben</div>
        <div className='toTop'>
          <img src={payment} alt='payment' />
        </div>
      </div>
      <BackTop />
    </div>
  );
};

export default FooterCopyright;

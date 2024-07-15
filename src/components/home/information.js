import { Col, Row } from 'antd';
import bgimage1 from '../../assets/images/ad-img1.png';
import bgimage2 from '../../assets/images/ad-img2.png';

function Information() {
  return (
    <div className='block informationBlock'>
      <Row gutter={24}>
        <Col md={12}>
          <div
            className='holder'
            style={{
              backgroundImage: `url(${bgimage1})`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h3>Everyday Essentials From</h3>
            <div className='price'>60 p</div>
          </div>
        </Col>
        <Col md={12}>
          <div
            className='holder'
            style={{
              backgroundImage: `url(${bgimage2})`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h3>Same Day Delivery</h3>
            <p>Free When You Spend Over $20</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Information;

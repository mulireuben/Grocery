import { Button, Col, Row } from 'antd';
import React from 'react';

const products = [
  {
    key: '1',
    image: require('../../assets/images/img1.jpg'),
    title:
      'Fairy Clean & Fresh Washing Up liquid Progamate & amp; Honeysuckle 520 ml',
    price: '$ 200.00',
  },
  {
    key: '2',
    image: require('../../assets/images/img2.jpg'),
    title: 'colgate tripple action toothpaste 100ml',
    price: '$ 70.00',
  },
  {
    key: '3',
    image: require('../../assets/images/img3.jpg'),
    title: 'Breeze toilet tissue soft white 24 Roll',
    price: '$ 180.00',
  },
  {
    key: '4',
    image: require('../../assets/images/img4.jpg'),
    title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 wash 900 ml',
    price: '$ 205.00',
  },
];

const RecentProduct = () => {
  return (
    <div className='block products'>
      <h2>Recent Products</h2>
      <Row gutter={[24, 24]}>
        {products.map((products) => {
          return (
            <Col xs={24} sm={12} lg={6}>
              <div className='content'>
                <div className='image'>
                  <img src={products.image} alt='products' />
                </div>
                <h3>{products.title}</h3>
                <div className='price'> {products.price}</div>
                <Button type='primary'>Add to Basket</Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default RecentProduct;

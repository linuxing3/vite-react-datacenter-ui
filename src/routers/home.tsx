import React from 'react';
import { Link } from 'dva/router';
import { Image, Carousel, Layout } from 'antd';

const contentStyle = {
  height: '360px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
};

export default function App() {
  return (
    <Layout>
      <Carousel style={{alignItems: 'center'}}>
        <div>
          <Link to='/login'>
            <Image src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />
          </Link>
        </div>
        <div>
          <Link to='/login'>
            <Image src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />
          </Link>
        </div>
        <div>
          <Link to='/login'>
            <Image src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />
          </Link>
        </div>
        <div>
          <Link to='/login'>
            <Image src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />
          </Link>
        </div>
      </Carousel>
    </Layout>
  );
}

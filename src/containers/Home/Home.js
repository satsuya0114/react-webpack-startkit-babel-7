import React from 'react';
import {Button} from 'antd';
import './Home.less';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }} >
      <h2 className="orange">Hello, This is webpack demo for React</h2>
      <p>:D</p>
      <Button type="primary">Primary</Button>
    </div>
  );
};

export default Home;

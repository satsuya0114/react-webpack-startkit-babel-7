import React from 'react';
import {Button} from 'antd';
import './Home.less';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center' }} >
        <h2 className="orange">Hello, This is webpack demo for React test</h2>
        <p>:D</p>
        <Button type="primary">Primary test</Button>
      </div>
    );
  }
}

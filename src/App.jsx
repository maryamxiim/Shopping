import React from 'react';
import {
  Row, Col, Input, Button,
  Layout, Menu,
} from 'antd';
import { UserOutlined, ShopOutlined, ShoppingOutlined } from '@ant-design/icons';
import picture from './assets/Group2.png';
import './App.css';

const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Header } = Layout;

function App() {
  return (
    <div className="App">
      <Row className="search">
        <Col span={8} className="picture">
          <img src={picture} alt="" />
          <div>نام فروشگاه</div>
        </Col>
        <Col span={8}><Search placeholder="جستجو در میان محصولات" onSearch={onSearch} style={{ width: 200 }} /></Col>
        <Col span={8} className="mim">

          <Button
            type="primary"
            icon={<ShopOutlined />}
          >
            ثبت نام فروشندگان
          </Button>
          <Button type="primary" icon={<ShoppingOutlined />}>
            سبد خرید
          </Button>
          <Button type="primary" icon={<UserOutlined />}>
            حساب کاربری
          </Button>

        </Col>
      </Row>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default App;

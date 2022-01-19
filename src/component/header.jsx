import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Button, Layout, Menu, Dropdown } from 'antd';
import { UserOutlined, ShopOutlined, ShoppingOutlined, DownOutlined } from '@ant-design/icons';
import logo from '../assets/Group2.png';
import './header.scss';

const { SubMenu } = Menu;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Header } = Layout;
const headeritem = require('../headeritem.json');

const menu = (
  <Menu className="menuitem">
    <Menu.ItemGroup title="محصولات دسته بندی کالا دیجیتال:" />
    {headeritem.menuitem.map((item) => (
      <SubMenu title={item.name} className="submenu">
        {headeritem.submenuitem.map((items) => (
          <Menu.Item className="submenu-item">
            <span> {items.country}</span>
            <span>{items.english}</span>
          </Menu.Item>
        ))}
      </SubMenu>
    ))}
  </Menu>
);

function Headers() {
  return (
    <div className="headers">
      <Row className="header">
        <Col lg={4} className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <h3>نام فروشگاه</h3>
        </Col>
        <Col lg={7} xs={14}>
          <Search placeholder="جستجو در میان محصولات" onSearch={onSearch} className="search" />
        </Col>
        <Col lg={7} xs={24} className="top-left-header">
          <Link to="/">
            <Button className="left-header" type="text" icon={<ShopOutlined />}>
              &nbsp; ثبت نام فروشندگان
            </Button>
          </Link>
          |
          <Link to="/">
            <Button className="left-header" type="text" icon={<ShoppingOutlined />}>
              &nbsp; زنبیل
            </Button>
          </Link>
          |
          <Link to="/">
            <Button className="left-header" type="text" icon={<UserOutlined />}>
              &nbsp; حساب کاربری
            </Button>
          </Link>
        </Col>
      </Row>
      <Layout className="layout">
        <Header>
          <Menu className="menu" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/s" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  کالای دیجیتال
                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="2">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  خانه و آشپزخانه
                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="3">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  لوازم التحریر، کتاب و هنر
                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="4">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  آرایشی و سلامت
                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="5">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  اسباب بازی
                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="6">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  ورزش و سفر
                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default Headers;

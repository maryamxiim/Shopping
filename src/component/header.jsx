// import 'antd/dist/antd.css';
import React from 'react';
// import { Link } from 'react-router-dom';/
import { Link } from 'react-router-dom';
import {
  Row, Col, Input, Button,
  Layout, Menu,
  Card, Dropdown, Divider,
} from 'antd';
import {
  UserOutlined, ShopOutlined, ShoppingOutlined, DownOutlined,
} from '@ant-design/icons';
import logo from '../assets/Group2.png';
import './header.css';
// import { } from 'antd';
// import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Header } = Layout;

const menu = (
  <Menu className="sara">
    <Menu.ItemGroup title="محصولات دسته بندی کالا دیجیتال:" />
    {/* <Menu.Item>3rddf menu item</Menu.Item> */}

    <SubMenu title="تلفن همراه" className="submenu" icon={<DownOutlined />}>

      <Menu.Item className="submenu-item">
        سامسونگ
        <span>(Samsung)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        شیاومی

        <span>(Xiaomi)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        هوآوی
        <span>(Huawei)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        اپل
        <span>(Apple)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        ال جی
        <span>(LG)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        نوکیا
        <span>(Nokia)</span>

      </Menu.Item>
    </SubMenu>
    <SubMenu className="submenu" title="لوازم جانبی تلفن همراه">
      <Menu.Item className="submenu-item">
        سامسونگ
        <span>(Samsung)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        شیاومی

        <span>(Xiaomi)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        هوآوی
        <span>(Huawei)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        اپل
        <span>(Apple)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        ال جی
        <span>(LG)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        نوکیا
        <span>(Nokia)</span>

      </Menu.Item>
    </SubMenu>
    <SubMenu className="submenu" title="لپ تاپ">
      <Menu.Item className="submenu-item">
        سامسونگ
        <span>(Samsung)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        شیاومی

        <span>(Xiaomi)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        هوآوی
        <span>(Huawei)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        اپل
        <span>(Apple)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        ال جی
        <span>(LG)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        نوکیا
        <span>(Nokia)</span>

      </Menu.Item>
    </SubMenu>
    <SubMenu className="submenu" title=" لوازم جانبی لپ تاپ">
      <Menu.Item className="submenu-item">
        سامسونگ
        <span>(Samsung)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        شیاومی
        {' '}
        <span>(Xiaomi)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        هوآوی
        <span>(Huawei)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        اپل
        <span>(Apple)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        ال جی
        <span>(LG)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        نوکیا
        <span>(Nokia)</span>

      </Menu.Item>
    </SubMenu>

    <Menu.Divider />
    <SubMenu className="submenu" title=" مشاهده همه">
      <Menu.Item className="submenu-item">
        سامسونگ
        <span>(Samsung)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        شیاومی
        {' '}
        <span>(Xiaomi)</span>
      </Menu.Item>
      <Menu.Item className="submenu-item">
        هوآوی
        <span>(Huawei)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        اپل
        <span>(Apple)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        ال جی
        <span>(LG)</span>

      </Menu.Item>
      <Menu.Item className="submenu-item">
        نوکیا
        <span>(Nokia)</span>

      </Menu.Item>
    </SubMenu>
  </Menu>
);

function Headers() {
  return (
    <div className="App">
      <Row className="header">
        <Col span={3} className="logo">
          <img src={logo} alt="" />
          <h3>نام فروشگاه</h3>
        </Col>
        <Col span={6}><Search placeholder="جستجو در میان محصولات" onSearch={onSearch} style={{ width: 400, direction: 'ltr', textAlign: 'right' }} /></Col>
        <Col span={9} className="mim">

          <Button
            className="leftheader"
            type="text"
            icon={<ShopOutlined />}
          >
          &nbsp;
            ثبت نام فروشندگان
          </Button>
          |
          <Button className="leftheader" type="text" icon={<ShoppingOutlined />}>
          &nbsp;
            سبد خرید
          </Button>
          |
          <Button className="leftheader" type="text" icon={<UserOutlined />}>
            &nbsp;
            حساب کاربری
          </Button>
        </Col>
      </Row>
      <Layout className="layout">
        <Header>
          <Menu className="menu" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" className="menus">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  کالای دیجیتال

                  <DownOutlined />
                </Link>
              </Dropdown>
              {/* <Menu.Divider type="vertical" />
              <Divider type="vertical" /> */}
            </Menu.Item>
            <Menu.Item key="2" className="menus">

              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  خانه و آشپزخانه

                  <DownOutlined />
                </Link>
              </Dropdown>

            </Menu.Item>
            <Menu.Item key="3" className="menus">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  لوازم التحریر، کتاب و هنر

                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="4" className="menus">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  آرایشی و سلامت

                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="5" className="menus">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  اسباب بازی

                  <DownOutlined />
                </Link>
              </Dropdown>

            </Menu.Item>
            <Menu.Item key="6" className="menus">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  ورزش و سفر

                  <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="7" className="menus">
              <Dropdown overlay={menu} className="dropdown">
                <Link to="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  زیور آلات و پوشاک

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

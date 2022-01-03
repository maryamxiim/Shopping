import 'antd/dist/antd.css';
import React from 'react';
import {
  Menu, Row, Col, Switch, Divider, Typography, Button,
} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import Headers from '../component/header';
import Footer from '../component/footer';
import Productsrow from '../component/produtsrow';
import Cards from '../component/card';
import Rectangle27 from '../assets/Rectangle27.png';

// import Products from '../component/products';
import './productslist.css';

const { SubMenu } = Menu;
const { Title } = Typography;

function ProductsList() {
  return (
    <div className="App">
      <Headers />
      <div className="ddd">
        <h2>
          نتایج جستجو برای عنوان :
          <b> ساعت هوشمند   </b>
        </h2>
      </div>
      <Row>
        <Col className="heys" span={5}>
          <Menu
            onClick={(e) => {
              console.log('click ', e);
            }}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            className="lll"
          >
            <SubMenu key="sub1" title="دسته بندی">

              <Menu.Item key="1">تست 1</Menu.Item>
              <Menu.Item key="2">تست 2</Menu.Item>
              <Menu.Item key="3">تست 3</Menu.Item>
              <Menu.Item key="4">تست 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="برند">
              <Menu.Item key="5">تست 5</Menu.Item>
              <Menu.Item key="6">تست 6</Menu.Item>
              {/* <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">تست 7</Menu.Item>
                <Menu.Item key="8">تست 8</Menu.Item>
              </SubMenu> */}
            </SubMenu>
            <SubMenu key="sub4" title="بازه قیمت">
              <Menu.Item key="9">تست 9</Menu.Item>
              <Menu.Item key="10">تست 10</Menu.Item>
              <Menu.Item key="11">تست 11</Menu.Item>
              <Menu.Item key="12">تست 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="محل فروشنده">
              <Menu.Item key="9">تست 9</Menu.Item>
              <Menu.Item key="10">تست 10</Menu.Item>
              <Menu.Item key="11">تست 11</Menu.Item>
              <Menu.Item key="12">تست 12</Menu.Item>
            </SubMenu>
          </Menu>
          <Divider style={{ width: 100 }} />
          {/* <br />
          <hr />
          <br /> */}

          <div className="mmm">
            <div>فقط نمایش محصولات موجود</div>
            <div>
              {' '}
              <Switch size="small" defaultChecked />
            </div>
          </div>
          <div className="mmm">
            <div>فقط نمایش محصولات تخفیف دار</div>
            <div>
              {' '}
              <Switch size="small" defaultChecked />
            </div>
          </div>
          <div className="mmm">
            <div>فقط کالاهای اصل</div>
            <div>
              {' '}
              <Switch size="small" defaultChecked />
            </div>
          </div>

        </Col>
        <Col span={17}>
          {/* <Productsrow />
           */}
          <Row className="nnn">
            <Col span={5} className="show">ترتیب نمایش نتایج بر اساس:</Col>
            <Col span={3}>
              <Button type="text" ghost className="btn-show">
                {' '}
                پربازدیدترین
              </Button>
            </Col>
            <Col span={3}>
              <Button type="text" ghost className="btn-show">
                {' '}
                جدیدترین
              </Button>

            </Col>
            <Col span={4}>
              <Button type="text" ghost className="btn-show">
                {' '}
                قیمت: از کم به زیاد
              </Button>

            </Col>
            <Col span={4}>
              <Button type="text" ghost className="btn-show">
                {' '}
                قیمت: از زیاد به کم
              </Button>

            </Col>

          </Row>
          <Row className="ppp">
            <Col>
              <Link to="/shopping/product">
                <Cards img={Rectangle27} productname="محصول 1" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 2" price="200,000" off="20,000" />
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 3" price="200,000" off="20,000" />
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 4" price="200,000" off="20,000" />
            </Col>

          </Row>
          <Row className="ppp">
            <Col>
              <Cards img={Rectangle27} productname="محصول 5" price="200,000" off="20,000" />
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 6" price="200,000" off="20,000" />
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 7" price="200,000" off="20,000" />
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 8" price="200,000" off="20,000" />
            </Col>

          </Row>
          <Row className="ppp">
            <Col>
              <Cards img={Rectangle27} productname="محصول 9" price="200,000" off="20,000" />
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 10" price="200,000" off="20,000" />
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 11" price="200,000" off="20,000" />
            </Col>
            <Col>
              <Cards img={Rectangle27} productname="محصول 12" price="200,000" off="20,000" />
            </Col>

          </Row>

        </Col>

      </Row>

      <Footer />
    </div>
  );
}

export default ProductsList;

import 'antd/dist/antd.css';
import React from 'react';
import { Menu, Row, Col, Switch, Divider, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import Headers from '../../component/header';
import Footer from '../../component/footer';
import Cards from '../../component/card';
import Rectangle27 from '../../assets/Rectangle27.png';
import img1 from '../../assets/image.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';
import image9 from '../../assets/image9.jpg';
import image10 from '../../assets/image10.jpg';
import image11 from '../../assets/image11.jpg';
import image12 from '../../assets/image12.jpg';

import './productslist.css';

const { SubMenu } = Menu;

function ProductsList() {
  return (
    <div>
      <Headers />
      <div className="titleproduct">
        <h2>
          نتایج جستجو برای عنوان :<b> ساعت هوشمند </b>
        </h2>
      </div>
      <Row>
        <Col className="menus" span={5}>
          <Menu
            onClick={(e) => {
              console.log('click ', e);
            }}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            className="menu-item">
            <SubMenu key="sub1" title="دسته بندی">
              <Menu.Item key="1">ساعت هوشمند</Menu.Item>
              <Menu.Item key="2">ساعت مچی </Menu.Item>
              <Menu.Item key="3"> ساعت زنانه </Menu.Item>
              <Menu.Item key="4"> ساعت مردانه </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="برند">
              <Menu.Item key="5">تست 5</Menu.Item>
              <Menu.Item key="6">تست 6</Menu.Item>
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

          <div className="radioitem">
            <div>فقط نمایش محصولات موجود</div>
            <div>
              {' '}
              <Switch size="small" defaultChecked />
            </div>
          </div>
          <div className="radioitem">
            <div>فقط نمایش محصولات تخفیف دار</div>
            <div>
              {' '}
              <Switch size="small" defaultChecked />
            </div>
          </div>
          <div className="radioitem">
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
          <Row className="resultshow">
            <Col span={5} className="show">
              ترتیب نمایش نتایج بر اساس:
            </Col>
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
          <Row className="resultproduct">
            <Col>
              <Link to="/shopping/product">
                <Cards img={img1} productname="محصول 1" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image2} productname="محصول 2" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image3} productname="محصول 3" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image4} productname="محصول 4" price="200,000" off="20,000" />
              </Link>
            </Col>
          </Row>
          <Row className="resultproduct">
            <Col>
              <Link to="/shopping/product">
                <Cards img={image5} productname="محصول 5" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image6} productname="محصول 6" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image7} productname="محصول 7" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image8} productname="محصول 8" price="200,000" off="20,000" />
              </Link>
            </Col>
          </Row>
          <Row className="resultproduct">
            <Col>
              <Link to="/shopping/product">
                <Cards img={image9} productname="محصول 9" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image10} productname="محصول 10" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image11} productname="محصول 11" price="200,000" off="20,000" />
              </Link>
            </Col>
            <Col>
              <Link to="/shopping/product">
                <Cards img={image12} productname="محصول 12" price="200,000" off="20,000" />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

export default ProductsList;
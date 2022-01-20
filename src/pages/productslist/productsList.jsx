import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col, Switch, Divider, Button } from 'antd';
import Headers from '../../component/header';
import Footer from '../../component/footer';
import Cards from '../../component/card';
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
import './productslist.scss';

const { SubMenu } = Menu;

function ProductsList() {
  const cardsproduct = [
    {
      img: img1,
      productname: 'محصول 1',
      price: '5000',
      off: '400',
      id: 'samsung'
    },
    {
      img: image2,
      productname: 'محصول 2',
      price: '5000',
      off: '400',
      id: 'samsung'
    },
    {
      img: image3,
      productname: 'محصول 3',
      price: '5000',
      off: '400',
      id: 'huawei'
    },
    {
      img: image4,
      productname: 'محصول 4',
      price: '5000',
      off: '400',
      id: 'lg'
    },
    {
      img: image5,
      productname: 'محصول 5',
      price: '5000',
      off: '400'
    },
    {
      img: image6,
      productname: 'محصول 6',
      price: '5000',
      off: '400',
      id: 'samsung'
    },
    {
      img: image7,
      productname: 'محصول 7',
      price: '5000',
      off: '400',
      id: 'samsung'
    },
    {
      img: image8,
      productname: 'محصول 8',
      price: '5000',
      off: '400',
      id: 'xiaomi'
    },
    {
      img: image9,
      productname: 'محصول 9',
      price: '5000',
      off: '400',
      id: 'samsung'
    },
    {
      img: image10,
      productname: 'محصول 10',
      price: '5000',
      off: '400',
      id: 'samsung'
    },
    {
      img: image11,
      productname: 'محصول 11',
      price: '5000',
      off: '400',
      id: 'samsung'
    },
    {
      img: image12,
      productname: 'محصول 12',
      price: '5000',
      off: '400',
      id: 'samsung'
    }
  ];
  // <Cards img={img1} productname="" price="10000" off="20000" />

  return (
    <div className="products-list">
      <Headers />
      <Row className="title-product">
        <Col lg={22} xs={23}>
          <h2>
            نتایج جستجو برای عنوان :<b> ساعت هوشمند </b>
          </h2>
        </Col>
      </Row>
      <Row className="side">
        <Col className="menus" lg={5} xs={22} md={12}>
          <Menu
            onClick={(e) => {
              console.log('click ', e);
            }}
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
              <Menu.Item key="13">تست 9</Menu.Item>
              <Menu.Item key="14">تست 10</Menu.Item>
              <Menu.Item key="15">تست 11</Menu.Item>
              <Menu.Item key="16">تست 12</Menu.Item>
            </SubMenu>
          </Menu>
          <Divider style={{ width: 100 }} />
          <div className="radio-item">
            <div>فقط نمایش محصولات موجود</div>
            <div>
              <Switch size="small" defaultChecked />
            </div>
          </div>
          <div className="radio-item">
            <div>فقط نمایش محصولات تخفیف دار</div>
            <div>
              <Switch size="small" defaultChecked />
            </div>
          </div>
          <div className="radio-item">
            <div>فقط کالاهای اصل</div>
            <div>
              <Switch size="small" defaultChecked />
            </div>
          </div>
        </Col>
        <Col lg={17} xs={24} md={12}>
          <Row className="result-show">
            <Col lg={6} xs={24} md={24} className="show">
              ترتیب نمایش نتایج بر اساس:
            </Col>
            <Col lg={4} xs={12} md={12}>
              <Button type="text" ghost className="btn-show">
                پربازدیدترین
              </Button>
            </Col>
            <Col lg={4} xs={12} md={12}>
              <Button type="text" ghost className="btn-show">
                جدیدترین
              </Button>
            </Col>
            <Col lg={4} xs={12} md={12}>
              <Button type="text" ghost className="btn-show">
                قیمت: از کم به زیاد
              </Button>
            </Col>
            <Col lg={4} xs={12} md={12}>
              <Button type="text" ghost className="btn-show">
                قیمت: از زیاد به کم
              </Button>
            </Col>
          </Row>
          <Row className="result-product">
            {cardsproduct.map((item) => (
              <Col lg={6} xs={12} className="prudcts-item">
                <Link to={'/shopping/'.concat(item.id)} activeClassName="current">
                  <Cards
                    img={item.img}
                    productname={item.productname}
                    price={item.price}
                    off={item.off}
                  />
                </Link>
              </Col>
            ))}
            {/* <Col lg={6} xs={12}>
              <Link to="/shopping/samsung" activeClassName="current">
                <Cards img={img1} productname="محصول 11" price="10000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/hwai">
                <Cards img={image2} productname="محصول 2" price="200000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/3">
                <Cards img={image3} productname="محصول 3" price="200000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image4} productname="محصول 4" price="200000" off="20000" />
              </Link>
            </Col> */}
          </Row>
          {/* <Row className="result-product">
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image5} productname="محصول 5" price="200000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image6} productname="محصول 6" price="200000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image7} productname="محصول 7" price="200000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image8} productname="محصول 8" price="200000" off="20000" />
              </Link>
            </Col>
          </Row>
          <Row className="result-product">
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image9} productname="محصول 9" price="200000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image10} productname="محصول 10" price="200000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image11} productname="محصول 11" price="200000" off="20000" />
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <Link to="/shopping/product">
                <Cards img={image12} productname="محصول 12" price="200000" off="20000" />
              </Link> */}
          {/* </Col>
          </Row> */}
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

export default ProductsList;

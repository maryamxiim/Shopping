import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Breadcrumb, Col, Carousel, Divider, InputNumber, Button, Typography,
} from 'antd';
import { HeartOutlined, HeartTwoTone, ShareAltOutlined } from '@ant-design/icons';
import Headers from '../component/header';
import Footer from '../component/footer';
import slider from '../assets/image.png';
import './product.css';

const { Paragraph } = Typography;
function onChange(a, b, c) {
  console.log(a, b, c);
}

function Product() {
  return (
    <div className="App">
      <Headers />
      <Row className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>کالای دیجیتال</Breadcrumb.Item>
          <Breadcrumb.Item>
            تلفن همراه
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            سامسونگ
          </Breadcrumb.Item>
        </Breadcrumb>

      </Row>
      <Row className="productslider">
        <Col span={7}>
          {' '}
          <Carousel afterChange={onChange}>
            <div>

              <img src={slider} alt="" />

            </div>
            <div>

              <img src={slider} alt="" />
            </div>
            <div>
              <img src={slider} alt="" />
            </div>
            <div>
              <img src={slider} alt="" />
            </div>
          </Carousel>

        </Col>
        <Col span={9} className="productdetails">
          <Row><h1>Galaxy watch active 2</h1></Row>
          <Row>
            <h5>
              ساعت هوشمند سامسونگ مدلGalaxy watch active 2 با
              صفحه نمایش Super AMOLED ، 44mm
              {' '}
            </h5>

          </Row>
          <Divider />
          <Row className="price">
            <Col span={1}>
              <h5>
                <s>
                  ۵٬۴۰۷٬۵۰۰
                </s>
              </h5>

            </Col>

            <Col span={1}>
              <h2>

                ۵٬۱۵۰٬۰۰۰

              </h2>

            </Col>

          </Row>
          <Row>
            <Col span={3}><InputNumber className="inputnumber" min={1} max={10} defaultValue={2} onChange={onChange} size="small" /></Col>
            <Col span={10}>
              <Button
                type="primary"
                className="addtobasket"
              >
                اضافه کردن به زنبیل
              </Button>
            </Col>
            <Col span={10}>
              <Button
                type="text"
                className="buy"
              >
                خرید مستقیم
              </Button>

            </Col>
          </Row>
          <Row>
            <Col span={11} className="icon">
              <Paragraph
                className="like"
                copyable={{
                  icon: [<HeartTwoTone
                    key="copy-icon"
                    twoToneColor="black"
                    style={{ fontSize: '16px', color: 'black' }}
                  />, <HeartOutlined key="copied-icon" twoToneColor="red" style={{ fontSize: '16px', color: 'red' }} />],
                  tooltips: ['like', 'liked'],
                }}
              />
              <h5>اضافه کردن به لیست علاقه مندی ها</h5>

            </Col>
            <Col span={11} className="icon">
              <Link to="/">
                <ShareAltOutlined style={{ fontSize: '16px', color: 'black' }} />
              </Link>
              <h5>  به اشتراک گذاری</h5>
            </Col>

          </Row>
          <Divider />

          <Row>1</Row>
        </Col>
        <Col span={6}>3</Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Product;

import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Breadcrumb, Col, Carousel, Divider, InputNumber, Button, Typography, Collapse,
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

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
ساعت‌های هوشمند از آن دسته گجت‌هایی هستند که روزبه‌روز بیشتر به محبوبیت آن‌ها افزوده شده و طرفداران بیشتری پیدا می‌کنند. در میان تنوع زیاد این ساعت‌ها اما، ساعت گلکسی واچ اکتیو 2 (Galaxy Watch Active 2) ساخت کمپانی نام آشنا سامسونگ (Samsung) به یکی از انتخاب‌‍‌های محبوب کاربران اندرویدی تبدیل شده است.

`;

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
                    twoToneColor="blue"
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

          <Row>
            <Col span={24}>
              <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right">
                <Panel className="panel" showArrow={false} header="معرفی محصول" key="1" style={{ backgroundColor: 'white', width: '100%', borderBottom: '1px solid #e4e2e2' }}>
                  <h5>{text}</h5>
                </Panel>
                <Panel
                  showArrow={false}
                  header="مشخصات ظاهری"
                  key="2"
                  style={{ backgroundColor: 'white', width: '100%', borderBottom: ' none' }}
                  icon={<HeartOutlined />}
                >
                  <h5>{text}</h5>
                </Panel>
              </Collapse>

            </Col>

          </Row>
        </Col>
        <Col span={6}>3</Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Product;

import 'antd/dist/antd.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Breadcrumb,
  Col,
  Carousel,
  Divider,
  InputNumber,
  Button,
  Typography,
  Collapse,
  Tabs
} from 'antd';
import { HeartOutlined, HeartTwoTone, ShareAltOutlined } from '@ant-design/icons';
import Headers from '../component/header';
import Footer from '../component/footer';
import slider from '../assets/image.png';
import shop from '../assets/shop.png';
import call from '../assets/call.png';
import location from '../assets/location.png';
import grantee from '../assets/grantee.png';
import shipping from '../assets/shipping.png';
import flag from '../assets/flag.png';
import message from '../assets/message.png';
import bag from '../assets/bag.png';
import picture from '../assets/Rectangle39.png';
import Rectangle27 from '../assets/Rectangle27.png';
import Cards from '../component/card';
import saat1 from '../assets/saat1.jpg';
import saat2 from '../assets/saat2.jpg';
import saat3 from '../assets/saat3.jpg';
import saat4 from '../assets/saat4.jpg';
import './product.css';

const { TabPane } = Tabs;
const { Paragraph } = Typography;
function onChange(a, b, c) {
  console.log(a, b, c);
}
const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}

const text = `
ساعت‌های هوشمند از آن دسته گجت‌هایی هستند که روزبه‌روز بیشتر به محبوبیت آن‌ها افزوده شده و طرفداران بیشتری پیدا می‌کنند.
 در میان تنوع زیاد این ساعت‌ها اما، ساعت گلکسی واچ اکتیو 2 
 (Galaxy Watch Active 2) ساخت کمپانی نام آشنا سامسونگ
  (Samsung) به یکی از انتخاب‌‍‌های محبوب کاربران
   اندرویدی تبدیل شده است.

`;

function Product() {
  return (
    <div>
      <Headers />
      <Row className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>کالای دیجیتال</Breadcrumb.Item>
          <Breadcrumb.Item>تلفن همراه</Breadcrumb.Item>
          <Breadcrumb.Item>سامسونگ</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row className="productslider">
        <Col span={7}>
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
          <Row>
            <h1>Galaxy watch active 2</h1>
          </Row>
          <Row>
            <h5>ساعت هوشمند سامسونگ مدلGalaxy watch active 2 با صفحه نمایش Super AMOLED ، 44mm</h5>
          </Row>
          <Divider />
          <Row className="price">
            <Col span={1}>
              <h5>
                <s>۵٬۴۰۷٬۵۰۰</s>
              </h5>
            </Col>

            <Col span={1}>
              <h2>۵٬۱۵۰٬۰۰۰</h2>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <InputNumber
                className="inputnumber"
                min={1}
                max={10}
                defaultValue={2}
                onChange={onChange}
                size="small"
              />
            </Col>
            <Col span={10}>
              <Button type="primary" className="addtobasket">
                <img src={bag} alt="" style={{ width: '20px' }} />
                &nbsp; اضافه کردن به زنبیل
              </Button>
            </Col>
            <Col span={10}>
              <Button type="text" className="buy">
                خرید مستقیم
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={11} className="productdetails-icon">
              <Paragraph
                className="like"
                copyable={{
                  icon: [
                    <HeartTwoTone
                      key="copy-icon"
                      twoToneColor="blue"
                      style={{
                        fontSize: '16px',
                        color: 'black'
                      }}
                    />,
                    <HeartOutlined
                      key="copied-icon"
                      twoToneColor="red"
                      style={{
                        fontSize: '16px',
                        color: 'red'
                      }}
                    />
                  ],
                  tooltips: ['like', 'liked']
                }}
              />
              <h5>اضافه کردن به لیست علاقه مندی ها</h5>
            </Col>
            <Col span={11} className="productdetails-icon">
              <Link to="/">
                <ShareAltOutlined
                  style={{
                    fontSize: '16px',
                    color: 'black'
                  }}
                />
              </Link>
              <h5> به اشتراک گذاری</h5>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right">
                <Panel
                  header="معرفی محصول"
                  key="1"
                  style={{
                    backgroundColor: 'white',
                    width: '100%',
                    borderBottom: '1px solid #e4e2e2'
                  }}>
                  <h5>{text}</h5>
                </Panel>
                <Panel
                  header="مشخصات ظاهری"
                  key="2"
                  style={{
                    backgroundColor: 'white',
                    width: '100%',
                    borderBottom: ' none'
                  }}
                  icon={<HeartOutlined />}>
                  <h5>{text}</h5>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Col>
        <Col span={6} className="details-seller">
          <Row className="detailofseller">
            <Col span={2}>
              <img src={shop} alt="" style={{ width: '20px' }} />
            </Col>
            <Col
              span={5}
              style={{
                textAlign: 'left',
                marginLeft: '15px'
              }}>
              <h5>فروشنده:</h5>
            </Col>
            <Col span={12}>
              <h5>دیجیتال سنتر</h5>
            </Col>
          </Row>
          <Divider />
          <Row className="detailofseller">
            <Button
              type="primary"
              ghost
              style={{
                padding: '0px 70px',
                margin: 'auto',
                fontSize: '13px'
              }}>
              <img src={message} alt="" style={{ width: '20px' }} />
              &nbsp; شروع گفتگو با فروشنده
            </Button>
          </Row>
          <Row className="detailofseller">
            <Col span={2}>
              <img src={call} alt="" style={{ width: '20px' }} />
            </Col>
            <Col
              span={5}
              style={{
                textAlign: 'left',
                marginLeft: '15px'
              }}>
              <h5>تلفن:</h5>
            </Col>
            <Col span={12}>
              <h5>۰۹۸۷۶۵۴۳۲۱</h5>
            </Col>
          </Row>
          <Row className="detailofseller">
            <Col span={2}>
              <img src={location} alt="" style={{ width: '20px' }} />
            </Col>
            <Col
              span={5}
              style={{
                textAlign: 'left',
                marginLeft: '15px'
              }}>
              <h5>موقعیت فروشنده:</h5>
            </Col>
            <Col span={12}>
              <h5>چهارمحال بختیاری شهرکرد</h5>
            </Col>
          </Row>
          <Row className="detailofseller">
            <Col span={2}>
              <img src={grantee} alt="" style={{ width: '20px' }} />
            </Col>
            <Col
              span={5}
              style={{
                textAlign: 'left',
                marginLeft: '15px'
              }}>
              <h5>نحوه ضمانت:</h5>
            </Col>
            <Col span={12}>
              <h5>ضمانت بازگشت 7 رdوزه کالا</h5>
            </Col>
          </Row>
          <Row className="detailofseller">
            <Col span={2}>
              <img src={shipping} alt="" style={{ width: '20px' }} />
            </Col>
            <Col
              span={5}
              style={{
                textAlign: 'left',
                marginLeft: '15px'
              }}>
              <h5>نحوه ارسال:</h5>
            </Col>
            <Col span={12}>
              <h5>پست پیشتاز - ارسال رایگان</h5>
            </Col>
          </Row>
          <Link to="/">
            <Row className="detailofseller">
              <Col span={2}>
                <img src={flag} alt="" style={{ width: '20px' }} />
              </Col>
              <Col span={8} style={{ textAlign: 'right' }} className="reaport">
                <h5>گزارش مشکل آگهی</h5>
              </Col>
            </Row>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col span={14} className="des">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="نقد و بررسی" key="1">
              <Row className="description">
                <Col span={14}>
                  <h5 className="description-caption">
                    ساعت‌های هوشمند از آن دسته گجت‌هایی هستند که روزبه‌روز بیشتر به محبوبیت آن‌ها
                    افزوده شده و طرفداران بیشتری پیدا می‌کنند. در میان تنوع زیاد این ساعت‌ها اما،
                    ساعت گلکسی واچ اکتیو 2 (Galaxy Watch Active 2) ساخت کمپانی نام آشنا سامسونگ
                    (Samsung) به یکی از انتخاب‌‍‌های محبوب کاربران اندرویدی تبدیل شده است.
                    <br />
                    <br />
                    سامسونگ تجربه‌های چندین ساله خود را در طراحی و ساخت ساعت‌های سری Galaxy Gear s
                    به‌کار گرفته تا بتواند ساعتی زیبا با طراحی مینیمال و در عین حال کاربردی را به
                    بازار عرضه کند. در سال 2019 بود که طی مراسم آنپکد (Unpacked) این کمپانی کره‌ای
                    ساعت گلکسی واچ اکتیو 2 را معرفی کرد. این ساعت با وفادار ماندن به طراحی مینیمال
                    نسخه قبلی خود، پیشرفت‌های خوبی در زمینه سخت‌افزار داشته و امکانات بیشتری را برای
                    کاربران فراهم کرده است.
                  </h5>
                </Col>
                <Col span={10} className="imgdescription">
                  <img src={slider} alt="" width="90%" />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="ویژگی" key="2">
              <Row className="description">
                <Col span={14}>
                  <h5 className="description-caption">
                    ساعت‌های هوشمند از آن دسته گجت‌هایی هستند که روزبه‌روز بیشتر به محبوبیت آن‌ها
                    افزوده شده و طرفداران بیشتری پیدا می‌کنند. در میان تنوع زیاد این ساعت‌ها اما،
                    ساعت گلکسی واچ اکتیو 2 (Galaxy Watch Active 2) ساخت کمپانی نام آشنا سامسونگ
                    (Samsung) به یکی از انتخاب‌‍‌های محبوب کاربران اندرویدی تبدیل شده است.
                    <br />
                    <br />
                    سامسونگ تجربه‌های چندین ساله خود را در طراحی و ساخت ساعت‌های سری Galaxy Gear s
                    به‌کار گرفته تا بتواند ساعتی زیبا با طراحی مینیمال و در عین حال کاربردی را به
                    بازار عرضه کند. در سال 2019 بود که طی مراسم آنپکد (Unpacked) این کمپانی کره‌ای
                    ساعت گلکسی واچ اکتیو 2 را معرفی کرد. این ساعت با وفادار ماندن به طراحی مینیمال
                    نسخه قبلی خود، پیشرفت‌های خوبی در زمینه سخت‌افزار داشته و امکانات بیشتری را برای
                    کاربران فراهم کرده است.
                  </h5>
                </Col>
                <Col span={10} className="imgdescription">
                  <img src={picture} alt="" width="90%" />
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Row className="title-similar">
          {' '}
          <Col span={16}>
            {' '}
            <h1>محصولات مشابه</h1>
          </Col>
        </Row>
        <Row className="silmilarproduct">
          <Col span={4}>
            <Link to="/shopping/product">
              <Cards img={saat1} productname="محصول1" price="100,000" off="80,000" />
            </Link>
          </Col>
          <Col span={4}>
            <Link to="/shopping/product">
              <Cards img={saat2} productname="محصول2" price="200,000" off="140,000" />
            </Link>
          </Col>
          <Col span={4}>
            <Link to="/shopping/product">
              <Cards img={saat3} productname="محصول3" price="300,000" off="250,000" />
            </Link>
          </Col>
          <Col span={4}>
            <Link to="/shopping/product">
              <Cards img={saat4} productname="محصول4" price="400,000" off="399,000" />
            </Link>
          </Col>
        </Row>
      </Row>
      <Footer />
    </div>
  );
}

export default Product;

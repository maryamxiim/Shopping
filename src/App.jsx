import 'antd/dist/antd.css';
import './App.less';
import React from 'react';
import {
  Row, Col, Input, Button,
  Layout, Menu,
  Card,
} from 'antd';
import { UserOutlined, ShopOutlined, ShoppingOutlined } from '@ant-design/icons';
import picture from './assets/Group2.png';
import picture2 from './assets/Rectangle19.png';
import picture3 from './assets/Rectangle20.png';
import icon24 from './assets/icon24.png';
import iconhaml from './assets/iconhaml.png';
import iconpay from './assets/iconpay.png';
import iconoff from './assets/iconoff.png';
import Rectangle27 from './assets/Rectangle27.png';
import card from './assets/Group26.png';
import imgfooter from './assets/Group2-2.png';

const { Meta } = Card;
// import '~antd/dist/antd.css';

const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Header } = Layout;
const gridStyle = {
  heigh: '25%',
  textAlign: 'center',
};

function App() {
  return (
    <div className="App">
      <Row className="search">
        <Col span={2} className="picture">
          <img src={picture} alt="" />
          <div>نام فروشگاه</div>
        </Col>
        <Col span={6}><Search placeholder="جستجو در میان محصولات" onSearch={onSearch} style={{ width: 200 }} /></Col>
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
          <Menu className="menu" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">کالای دیجیتال</Menu.Item>
            <Menu.Item key="2">خانه و آشپزخانه</Menu.Item>
            <Menu.Item key="3">لوازم التحریر، کتاب و هنر</Menu.Item>
            <Menu.Item key="4">آرایشی و سلامت</Menu.Item>
            <Menu.Item key="5">اسباب بازی</Menu.Item>
            <Menu.Item key="6">ورزش و سفر</Menu.Item>
            <Menu.Item key="7">زیور آلات و پوشاک</Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Row style={{ margin: '30px' }} className="ax">
        <Col span={16}><img src={picture2} alt="" style={{ width: '100%' }} /></Col>
        <Col span={5}><img src={picture3} alt="" style={{ width: '100%' }} /></Col>
      </Row>
      <Row className="axs">
        <Col span={4}>
          <div className="product">
            <img src={icon24} alt="" />
            <h4>پشتیبانی 24 ساعته</h4>
            <h6>همیشه هستیم!</h6>
          </div>
        </Col>
        <Col span={4}>
          <div className="product">
            <img src={iconhaml} alt="" />
            <h4>ارسال رایگان</h4>
            <h6>تا دستان شما</h6>
          </div>

        </Col>
        <Col span={4}>
          <div className="product">
            <img src={iconpay} alt="" />
            <h4>پرداخت آسان</h4>
            <h6>نقدی و اعتباری</h6>
          </div>

        </Col>
        <Col span={4}>
          <div className="product">
            <img src={iconoff} alt="" />
            <h4>همواره تخفیف</h4>
            <h6>چی ازاین بهتر؟</h6>
          </div>

        </Col>
      </Row>
      <Row className="axs">
        <Col span={5}><img src={card} alt="" style={{ width: '90%', height: '100%' }} /></Col>

        <Col span={4}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Rectangle27} />}
          >
            <h3> نام محصول</h3>
            <s style={{ textAlign: 'center', color: 'red' }}>100,000 تومان</s>
            <br />
            <h4 style={{ textAlign: 'left' }}>

              100,000 تومان

            </h4>
          </Card>
        </Col>
        <Col span={4}>

          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Rectangle27} />}
          >
            <h3> نام محصول</h3>
            <s style={{ textAlign: 'center', color: 'red' }}>100,000 تومان</s>
            <br />
            <h4 style={{ textAlign: 'left' }}>

              100,000 تومان

            </h4>
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Rectangle27} />}
          >
            <h3> نام محصول</h3>
            <s style={{ textAlign: 'center', color: 'red' }}>100,000 تومان</s>
            <br />
            <h4 style={{ textAlign: 'left' }}>

              100,000 تومان

            </h4>
          </Card>

        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Rectangle27} />}
          >
            <h3> نام محصول</h3>
            <s style={{ textAlign: 'center', color: 'red' }}>100,000 تومان</s>
            <br />
            <h4 style={{ textAlign: 'left' }}>

              100,000 تومان

            </h4>
          </Card>

        </Col>
      </Row>
      <Row className="axs">
        <Col span={5}><img src={card} alt="" style={{ width: '90%', height: '100%' }} /></Col>

        <Col span={4}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Rectangle27} />}
          >
            <h3> نام محصول</h3>
            <s style={{ textAlign: 'center', color: 'red' }}>100,000 تومان</s>
            <br />
            <h4 style={{ textAlign: 'left' }}>

              100,000 تومان

            </h4>
          </Card>
        </Col>
        <Col span={4}>

          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Rectangle27} />}
          >
            {/* <Meta title="" description="" /> */}
            <h3> نام محصول</h3>
            <s style={{ textAlign: 'center', color: 'red' }}>100,000 تومان</s>
            <br />
            <h4 style={{ textAlign: 'left' }}>

              100,000 تومان

            </h4>
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Rectangle27} />}
          >
            <h3> نام محصول</h3>
            <s style={{ textAlign: 'center', color: 'red' }}>100,000 تومان</s>
            <br />
            <h4 style={{ textAlign: 'left' }}>

              100,000 تومان

            </h4>
          </Card>

        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={Rectangle27} />}
          >
            <h3> نام محصول</h3>
            <s style={{ textAlign: 'center', color: 'red' }}>100,000 تومان</s>
            <br />
            <h4 style={{ textAlign: 'left' }}>

              100,000 تومان

            </h4>
          </Card>

        </Col>
      </Row>

      <div className="footers">
        <Row className="footer">
          <Col>
            <img src={imgfooter} alt="" style={{ width: '80%' }} />
            <h3 style={{ color: 'white' }}>نام فروشگاه</h3>
          </Col>
          <Col>
            <h3>سر تیتر فوتر</h3>
            <h5>لینک شماره 1</h5>
            <h5>لینک شماره 2</h5>
            <h5>لینک شماره 3</h5>
          </Col>
          <Col>
            <h3>سر تیتر فوتر</h3>
            <h5>لینک شماره 1</h5>
            <h5>لینک شماره 2</h5>
            <h5>لینک شماره 3</h5>
          </Col>
          <Col>
            <h3>سر تیتر فوتر</h3>
            <h5>لینک شماره 1</h5>
            <h5>لینک شماره 2</h5>
            <h5>لینک شماره 3</h5>
          </Col>
          <Col>
            <h3>سر تیتر فوتر</h3>
            <h5>لینک شماره 1</h5>
            <h5>لینک شماره 2</h5>
            <h5>لینک شماره 3</h5>
          </Col>

        </Row>
      </div>
    </div>
  );
}

export default App;

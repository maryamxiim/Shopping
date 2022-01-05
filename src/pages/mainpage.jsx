import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col } from 'antd';
import picture2 from '../assets/Rectangle19.png';
import picture3 from '../assets/Rectangle20.png';
import icon24 from '../assets/icon24.png';
import iconhaml from '../assets/iconhaml.png';
import iconpay from '../assets/iconpay.png';
import iconoff from '../assets/iconoff.png';
import slide22 from '../assets/slide22.jpg';
import left1 from '../assets/left1.jpg';
import left2 from '../assets/left2.jpg';
import Headers from '../component/header';
import Footer from '../component/footer';
import Productsrow from '../component/produtsrow';
import './mainpage.css';

function Mainpage() {
  return (
    <div>
      <Headers />
      <Row style={{ margin: '30px' }} className="slide">
        <Col span={15}>
          <img src={slide22} alt="" style={{ width: '100%', borderRadius: '16px' }} />
        </Col>
        <Col span={7}>
          <Row>
            <Col>
              <img src={left1} alt="" style={{ width: '100%', borderRadius: '16px' }} />
            </Col>
            <Col>
              <img
                src={left2}
                alt=""
                style={{ width: '100%', marginTop: '25px', borderRadius: '16px' }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="product-usp">
        <Col span={3}>
          <div className="productusp-item">
            <img src={icon24} alt="" />
            <h4>پشتیبانی 24 ساعته</h4>
            <h5>همیشه هستیم!</h5>
          </div>
        </Col>
        <Col span={3}>
          <div className="productusp-item">
            <img src={iconhaml} alt="" />
            <h4>ارسال رایگان</h4>
            <h5>تا دستان شما</h5>
          </div>
        </Col>
        <Col span={3}>
          <div className="productusp-item">
            <img src={iconpay} alt="" />
            <h4>پرداخت آسان</h4>
            <h5>نقدی و اعتباری</h5>
          </div>
        </Col>
        <Col span={3}>
          <div className="productusp-item">
            <img src={iconoff} alt="" />
            <h4>همواره تخفیف</h4>
            <h5>چی ازاین بهتر؟</h5>
          </div>
        </Col>
      </Row>
      {/* <Row></Row> */}

      <Row>
        <Productsrow />
      </Row>
      <Row>
        <Productsrow />
      </Row>

      <Footer />
    </div>
  );
}

export default Mainpage;

import React from 'react';
import { Row, Col } from 'antd';
import imgfooter from '../assets/Group2-2.png';
import pjson from '../../package.json';
import './footer.scss';
import Column from './column';

function Footer() {
  return (
    <footer className="footer">
      <Row className="footer-content">
        <Col lg={4} xs={14} className="footer-logo">
          <img src={imgfooter} alt="" />
          <h3>نام فروشگاه</h3>
        </Col>
        <Col lg={4} xs={12}>
          <Column
            title="سر تیتر فوتر"
            item1="لینک شماره 1"
            item2="لینک شماره 2"
            item3="لینک شماره 3"
          />
        </Col>
        <Col lg={4} xs={12}>
          <Column
            title="سر تیتر فوتر"
            item1="لینک شماره 1"
            item2="لینک شماره 2"
            item3="لینک شماره 3"
          />
        </Col>
        <Col lg={4} xs={12}>
          <Column
            title="سر تیتر فوتر"
            item1="لینک شماره 1"
            item2="لینک شماره 2"
            item3="لینک شماره 3"
          />
        </Col>
        <Col lg={4} xs={12}>
          <Column
            title="سر تیتر فوتر"
            item1="لینک شماره 1"
            item2="لینک شماره 2"
            item3="لینک شماره 3"
          />
        </Col>
      </Row>
      <Row className="version">
        <Col>{`version ${pjson.version}`}</Col>
      </Row>
    </footer>
  );
}

export default Footer;

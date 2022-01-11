import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import imgfooter from '../assets/Group2-2.png';
import pjson from '../../package.json';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Row className="footer-content">
        <Col lg={3} xs={14} style={{ textAlign: 'center' }}>
          <img src={imgfooter} alt="" style={{ marginTop: '10px' }} />
          <h3 style={{ color: 'white' }}>نام فروشگاه</h3>
        </Col>
        <Col lg={4} xs={12}>
          <ul className="title">
            <Link to="/">
              <li>
                <h3>سر تیتر فوتر</h3>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 1</h5>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 2</h5>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 3</h5>
              </li>
            </Link>
          </ul>
        </Col>
        <Col lg={4} xs={12}>
          <ul className="title">
            <Link to="/">
              <li>
                <h3>سر تیتر فوتر</h3>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 1</h5>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 2</h5>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 3</h5>
              </li>
            </Link>
          </ul>
        </Col>
        <Col lg={4} xs={12}>
          <ul className="title">
            <Link to="/">
              <li>
                <h3>سر تیتر فوتر</h3>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 1</h5>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 2</h5>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 3</h5>
              </li>
            </Link>
          </ul>
        </Col>
        <Col lg={4} xs={12}>
          <ul className="title">
            <Link to="/">
              <li>
                <h3>سر تیتر فوتر</h3>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 1</h5>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 2</h5>
              </li>
            </Link>
            <Link to="/">
              <li>
                <h5> لینک شماره 3</h5>
              </li>
            </Link>
          </ul>
        </Col>
      </Row>
      <Row className="version">
        <Col>{`version ${pjson.version}`}</Col>
      </Row>
    </footer>
  );
}

export default Footer;

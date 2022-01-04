import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import imgfooter from '../assets/Group2-2.png';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Row className="footercontent">
        <Col>
          <img src={imgfooter} alt="" style={{ width: '80%', marginTop: '10px' }} />
          <h3 style={{ color: 'white' }}>نام فروشگاه</h3>
        </Col>
        <Col>
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
        <Col>
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
        <Col>
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
        <Col>
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
    </footer>
  );
}

export default Footer;

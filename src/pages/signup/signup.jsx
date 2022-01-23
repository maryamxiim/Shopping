import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Switch, Divider, Button, Input } from 'antd';
import './signup.scss';

function Signup() {
  return (
    <div className="signup">
      <Row className="signup-row title-signup">
        <Col lg={9} xs={23}>
          <h1>ایجاد حساب کاربری</h1>
        </Col>
      </Row>
      <Row className="signup-row">
        <Col className="signup-name" lg={2} xs={6}>
          نام و نام خانوادگی:
        </Col>
        <Col lg={6} xs={16}>
          <Input className="signup-input" placeholder="نام و نام خانوادگی خود را وارد کنید" />
        </Col>
      </Row>
      <Row className="signup-row">
        <Col className="signup-name" lg={2} xs={6}>
          شمراه تلفن همراه:
        </Col>
        <Col lg={6} xs={16}>
          <Input className="signup-input" placeholder="شماره تماس خود را وارد کنید" />
        </Col>
      </Row>
      <Row className="signup-row">
        <Col className="signup-name" lg={2} xs={6}>
          آدرس ایمیل:
        </Col>
        <Col lg={6} xs={16}>
          <Input className="signup-input" placeholder="آدرس ایمیل خود را وارد کنید" />
        </Col>
      </Row>
      <Row className="signup-row">
        <Col className="signup-name" lg={2} xs={6}>
          رمزعبور:
        </Col>
        <Col lg={6} xs={16}>
          <Input
            className="signup-input"
            placeholder="رمز عبور باید حداقل 6 کارکتر و شامل عدد و حروف باشد"
          />
        </Col>
      </Row>
      <Row className="signup-row">
        <Col className="signup-name" lg={2} xs={6}>
          تکرار رمزعبور:
        </Col>
        <Col lg={6} xs={16}>
          <Input
            className="signup-input"
            placeholder="برای اطمینان از درستی رمز عبور، لطفا آن را دوباره تکرار کنید"
          />
        </Col>
      </Row>
      <Row className="signup-row">
        <Col className="signup-name" lg={2} xs={6} />
        <Col lg={6} xs={22}>
          <Link to="/login">
            <Button type="primary" className="signup-btn">
              ثبت نام در وبسایت
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;

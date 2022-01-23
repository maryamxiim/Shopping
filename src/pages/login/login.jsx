import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Switch, Divider, Button, Input } from 'antd';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <Row className="login-row title-login">
        <Col lg={9} xs={23}>
          <h1>ورود به حساب کاربری</h1>
        </Col>
      </Row>

      <Row className="login-row">
        <Col className="login-name" lg={2} xs={6}>
          شمراه تلفن همراه:
        </Col>
        <Col lg={6} xs={16}>
          <Input className="login-input" placeholder="شماره تماس خود را وارد کنید" />
        </Col>
      </Row>

      <Row className="login-row">
        <Col className="login-name" lg={2} xs={6}>
          رمزعبور:
        </Col>
        <Col lg={6} xs={16}>
          <Input
            className="login-input"
            placeholder="رمز عبور باید حداقل 6 کارکتر و شامل عدد و حروف باشد"
          />
        </Col>
      </Row>

      <Row className="login-row">
        <Col className="login-name" lg={2} xs={6} />
        <Col lg={6} xs={22}>
          <Link to="/login">
            <Button type="primary" className="login-btn">
              ثبت نام در وبسایت
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

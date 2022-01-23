import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Switch, Divider, Button, Input, Select } from 'antd';
import './request.scss';

const { Option } = Select;

function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

function Request() {
  return (
    <div className="request">
      <Row className="request-row title-request">
        <Col lg={9} xs={23}>
          <h1>ثبت درخواست همکاری</h1>
        </Col>
      </Row>
      <Row className="request-row">
        <Col className="request-name" lg={2} xs={6}>
          نام و نام خانوادگی:
        </Col>
        <Col lg={6} xs={16}>
          <Input className="request-input" placeholder="نام و نام خانوادگی خود را وارد کنید" />
        </Col>
      </Row>
      <Row className="request-row">
        <Col className="request-name" lg={2} xs={6}>
          شمراه تماس:
        </Col>
        <Col lg={6} xs={16}>
          <Input className="request-input" placeholder="شماره تماس خود را وارد کنید" />
        </Col>
      </Row>
      <Row className="request-row">
        <Col className="request-name" lg={2} xs={6}>
          آدرس ایمیل:
        </Col>
        <Col lg={6} xs={16}>
          <Input className="request-input" placeholder="آدرس ایمیل خود را وارد کنید" />
        </Col>
      </Row>
      <Row className="request-row">
        <Col className="request-name" lg={2} xs={6}>
          نوع مالکیت:
        </Col>
        <Col lg={6} xs={16}>
          <Select
            labelInValue
            defaultValue={{ value: 'انتخاب کنید' }}
            style={{ width: '100%' }}
            onChange={handleChange}>
            <Option value="jack">ماکیت 1</Option>
            <Option value="lucy">مالکیت 2</Option>
          </Select>
        </Col>
      </Row>
      <Row className="request-row">
        <Col className="request-name" lg={2} xs={6}>
          اسم شرکت(اختیاری) :
        </Col>
        <Col lg={6} xs={16}>
          <Input className="request-input" placeholder="اسم شرکت خود را وارد کنید" />
        </Col>
      </Row>
      <Row className="request-row">
        <Col className="request-name" lg={2} xs={6}>
          گروه کالایی :
        </Col>
        <Col lg={6} xs={16}>
          <Select
            labelInValue
            defaultValue={{ value: 'انتخاب کنید' }}
            style={{ width: '100%' }}
            onChange={handleChange}>
            <Option value="jack">ماکیت 1</Option>
            <Option value="lucy">مالکیت 2</Option>
          </Select>
        </Col>
      </Row>
      <Row className="request-row">
        <Col className="request-name" lg={2} xs={6}>
          تنوع کالایی :
        </Col>
        <Col lg={6} xs={16}>
          <Select
            labelInValue
            defaultValue={{ value: 'انتخاب کنید' }}
            style={{ width: '100%' }}
            onChange={handleChange}>
            <Option value="jack">ماکیت 1</Option>
            <Option value="lucy">مالکیت 2</Option>
          </Select>
        </Col>
      </Row>
      <Row className="request-row">
        <Col className="request-name" lg={2} xs={6} />
        <Col lg={6} xs={22}>
          <Link to="/login">
            <Button type="primary" className="request-btn">
              ارسال درخواست همکاری
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Request;

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import './productusp.scss';

function Productusp({ img, title, caption }) {
  return (
    <div>
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h5>{caption}</h5>
    </div>
  );
}

export default Productusp;

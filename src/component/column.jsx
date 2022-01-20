import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

function Column({ title, item1, item2, item3 }) {
  return (
    <ul className="title">
      <Link to="/">
        <li>
          <h3>{title}</h3>
        </li>
      </Link>
      <Link to="/">
        <li>
          <h5>{item1} </h5>
        </li>
      </Link>
      <Link to="/">
        <li>
          <h5>{item2} </h5>
        </li>
      </Link>
      <Link to="/">
        <li>
          <h5>{item3} </h5>
        </li>
      </Link>
    </ul>
  );
}

export default Column;

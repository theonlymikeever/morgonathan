import React from 'react';
import { Link } from 'gatsby'

const listStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
};

const itemStyle = {
  margin: '0 10px'
}

export default () => (
  <ul style={listStyle}>
    <li style={itemStyle}>
      <Link to="/about">About</Link>
    </li>
    <li style={itemStyle}>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
)

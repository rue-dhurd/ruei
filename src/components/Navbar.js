import React from 'react';
import styled from 'react-emotion'

const Navbar = styled(props => (
  <nav className={props.className}>
    <ul>
      <li>Brands</li>
      <li>Women</li>
      <li>Men</li>
      <li>Home</li>
      <li>Travel</li>
      <li>Kids</li>
    </ul>
  </nav>
))`
  > ul {
    list-style-type: none;

    > li {
      display: inline-block;
      text-align: center;
      width: 15%;
    }
  }
`

export { Navbar }

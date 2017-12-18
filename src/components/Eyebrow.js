import React from 'react';
import styled from 'react-emotion'

const Eyebrow = styled(props => (
  <div className={props.className}>
    <div className="site-toggles">
      <a href="/" className="ruelala">Rue La La</a>
      <a href="/" className="ruenow">Rue Now</a>
    </div>

    <div className="eyebrow-slider">
      <p>Gifting just got easier!</p>
    </div>

    <div className="account-dropdown">
      <p>My Account</p>
    </div>
  </div>
))`
  background: ${props => props.theme.NEUTRAL_9};
  height: 45px;

  .site-toggles {
    display: inline-block;

    > a {
      display: inline-block;
      width: 150px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      text-decoration: none;
    }

    .ruelala {
      color: ${props => props.theme.NEUTRAL_6};
      background: ${props => props.theme.NEUTRAL_2};
    }

    .ruenow {
      background: ${props => props.theme.NEUTRAL_6};
      color: ${props => props.theme.NEUTRAL_2};
    }
  }

  .eyebrow-slider {
    position: absolute;
    color: ${props => props.theme.NEUTRAL_1};
    text-align: center;
    height: 45px;
    line-height: 45px;
    top: 0;
    left: 300px;
    right: 150px;
  }

  .account-dropdown {
    float: right;
    display: inline-block;
    color: ${props => props.theme.NEUTRAL_1};
    text-align: center;
    height: 45px;
    width: 150px;
    line-height: 45px;
  }

  p {
    margin: 0;
  }
`

export { Eyebrow }

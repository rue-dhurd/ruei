import React from 'react';
import styled from 'react-emotion'

import { Eyebrow } from './Eyebrow'
import { Navbar } from './Navbar'
import { RueLaLaLogo } from './RueLaLaLogo'

const RueHeader = styled(props => (
  <header className={props.className}>
    <Eyebrow />
    <RueLaLaLogo />
    <Navbar />
  </header>
))`
  border-bottom: 2px solid ${props => props.theme.NEUTRAL_3};

  .ruelala-logo {
    padding: 25px 0;

    > svg {
      display: block;
      width: 150px;
      margin: 0 auto;
    }
  }
`

export { RueHeader }

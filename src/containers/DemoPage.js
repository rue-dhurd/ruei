import React from 'react';
import styled from 'react-emotion'

import { Button } from '../ui/buttons'
import { Heading, H1, H2, H3, H4, H5, H6 } from '../ui/headings'

const DemoPage = styled((props) => (
  <div className={props.className}>
    <Heading>I am a "heading"</Heading>
    <H1>I am an h1</H1>
    <H2>I am an h2</H2>
    <H3>I am an h3</H3>
    <H4>I am an h4</H4>
    <H5>I am an h5</H5>
    <H6>I am an h6</H6>

    <br />

    <Button primary>Primary Button</Button>
    <Button secondary>Secondary Button</Button>
    <Button>Standard Button</Button>
    <Button disabled>Disabled Button</Button>
  </div>
))`
  /**
   * Page based overrides
   */

  h1, h2, h3, h4, h5, h6 {
    margin: 5px 0;
  }

  button {
    margin: 0 5px 5px 0;
  }
`

export { DemoPage }

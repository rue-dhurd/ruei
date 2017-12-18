import React from 'react';
import styled from 'react-emotion'

import { ListProduct } from '../components/ListProduct'

const ProductListPage = styled(props => (
  <div className={props.className}>

    <ListProduct id="1" image={"https://lorempixel.com/230/290/fashion/1/"} />
    <ListProduct id="2" image={"https://lorempixel.com/230/290/fashion/2/"} />
    <ListProduct id="3" image={"https://lorempixel.com/230/290/fashion/3/"} />

    <ListProduct id="4" image={"https://lorempixel.com/230/290/fashion/4/"} />
    <ListProduct id="5" image={"https://lorempixel.com/230/290/fashion/5/"} />
    <ListProduct id="6" image={"https://lorempixel.com/230/290/fashion/7/"} />

  </div>
))`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 25px 15px;

  /**
   * What's better here?
   * Defining a styled sub-Component, or
   * referencing the Component by class?
   *
   * There could be cases where we need a pseudo
   * class selector, which would need these classes
   * defined anyways.
   *
   * I'm thinking referencing class. It's a more familiar
   * pattern from regular web development. And it provides
   * more flexibility for problems like the pseudo class selectors.
   *
   * It would also only be a solution for "generalized" changes.
   * Something that would require a one-off class to be added
   * should be made a new sub-Component.
   *
   * But it's also not something we want to do too often. This has
   * performance implications and could transition into a messy
   * pattern if left unchecked.
   */
  .list-product {
    display: inline-block;
    margin: 15px 5px;
  }
`

export { ProductListPage }

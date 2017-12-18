import React from 'react';
import styled from 'react-emotion'

import { Button } from '../ui/buttons'

/**
 * Product Name sub-Component.
 *
 * This is an alternative to defining classes and styling
 * them in the parent Component's emotion-CSS. IT provides
 * a cleaner separation of styles without having to litter
 * the DOM in class names. But it might not always be the
 * right approach.
 */
const Name = styled('p', { target: 'product-name' })`
  ${props => props.theme.SMALL_NORMAL}
  margin: 5px 0;
`

const Price = styled('p', { target: 'product-price' })`
  ${props => props.theme.BODY_1_SEMIBOLD}
  margin: 5px 0;
`

const Msrp = styled('span', { target: 'product-msrp'})`
  ${props => props.theme.BODY_1_LIGHT}
    color: ${props => props.theme.NEUTRAL_5};
    text-decoration: line-through;
    margin-left: 5px;
`

/**
 * Overriden Component.
 *
 * The styled defined here will always take effect
 * over the base styles in <Button>.
 */
const AddToCart = styled(Button)`
  width: 100%;
  margin: 15px 0;
`

/**
 * Helper methods: `handleAddToCart` and `penniesToDecimal`.
 *
 * Defined outside of the main Component to have a cleaner
 * render method and a separation of logic.
 *
 * Could have made a Class Component with helpers instead,
 * but defining methods like this results in overall less code,
 * and in the future, a performance boost as well.
 *
 * You should read:
 * https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56e
 */

const handleAddToCart = productId => {
  alert(`Thanks for buying Product #${productId}`)
}

const penniesToDecimal = value => {
  let price = (value / 100).toFixed(2).toString()

  if (value > 1000 * 100) {
    price = `${price.slice(0, -6)},${price.slice(-6)}`
  }

  return price
}

const ListProduct = props => (
  <div className={`${props.className} list-product`}>
    <img src={props.image} alt="im-a-product" />

    <Name>Some Product Name Goes Here</Name>

    <Price>
      ${penniesToDecimal(199)}
      <Msrp>${penniesToDecimal(299)}</Msrp>
    </Price>

    <AddToCart primary onClick={(e) => handleAddToCart(props.id)}>
      Add to Cart
    </AddToCart>
  </div>
)

export { ListProduct }

import React from 'react';
import { Route } from 'react-router-dom'
import styled from 'react-emotion'

import { RueLaLaLogo } from '../components/RueLaLaLogo'

/**
 * Header sub-Component.
 *
 * Does not define any DOM, and because of that
 * lives in it's parent's file.
 *
 * Breaking down the parent Component into smaller
 * chunks like this keeps the parent clean and
 * helps developers understand how to create
 * the building blocks of a site (both HTML and CSS)
 * in a best practice way.
 */
const Header = styled('header')`
  color: ${props => props.theme.NEUTRAL_7};
  background: ${props => props.theme.NEUTRAL_1}
  border-bottom: 1px solid ${props => props.theme.NEUTRAL_3};
  top: 0;
  left: 0;

  .ruelala-logo {
    padding: 25px 0;

    > svg {
      display: block;
      width: 150px;
      margin: 0 auto;
    }
  }
`

const Content = styled('section')`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 30px;

  @media (min-width: 980px) {
    text-align: center;
  }
`

/**
 * Layout Component.
 *
 * Wraps React Router's <Route> to display a child Component
 * in a specific page layout when the route is visited.
 *
 * Wrapping <Route> allows us to more succinctly define
 * a page's Layout while still providing an understood and
 * standardized format.
 */
const StatusLayout = props => {
  const { className, component: Component, ...rest } = props

  return (
    <Route {...rest} render={matchProps => (
      <div className={className}>
        <Header>
          <RueLaLaLogo />
        </Header>

        <Content>
          <Component {...matchProps} />
        </Content>
      </div>
    )} />
  )
}

export { StatusLayout }

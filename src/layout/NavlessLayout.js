import React from 'react';
import { Route } from 'react-router-dom'

const NavlessLayout = props => {
  const { className, component: Component, ...rest } = props

  return (
    <Route {...rest} render={matchProps => (
      <div>
        <header>NAVLESS</header>

        <Component {...matchProps} />

        <footer>NAVLESS</footer>
      </div>
    )} />
  )
}

export { NavlessLayout }

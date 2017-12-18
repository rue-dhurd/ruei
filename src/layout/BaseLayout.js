import React from 'react';
import { Route } from 'react-router-dom'

import { RueHeader } from '../components/RueHeader'

const BaseLayout = props => {
  const { className, component: Component, ...rest } = props

  return (
    <Route {...rest} render={matchProps => (
      <div>
        <RueHeader />
        <Component {...matchProps} />
      </div>
    )} />
  )
}

export { BaseLayout }

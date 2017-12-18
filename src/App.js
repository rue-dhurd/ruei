import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming';

import { Rue, Stylist } from './ui/themes'

import { BaseLayout } from './layout/BaseLayout'
import { NavlessLayout } from './layout/NavlessLayout'
import { StatusLayout } from './layout/StatusLayout'

import { BoutiqueMain } from './containers/BoutiqueMain'
import { ProductListPage } from './containers/ProductListPage'
import { ProductDetailsPage } from './containers/ProductDetailsPage'
import { CheckoutPage } from './containers/CheckoutPage'
import { DemoPage } from './containers/DemoPage'

import { Error404 } from './containers/Error404'

const App = () => (
  <ThemeProvider theme={{...Rue, ...Stylist}}>
    <BrowserRouter>
      <Switch>
        <BaseLayout    path="/"          exact={true} component={BoutiqueMain} />
        <BaseLayout    path="/list/"     exact={true} component={ProductListPage} />
        <BaseLayout    path="/detail/"   exact={true} component={ProductDetailsPage} />
        <NavlessLayout path="/checkout/" exact={true} component={CheckoutPage} />
        <Route         path="/demo"                   component={DemoPage} />

        <StatusLayout path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

// TODO:
//   - Global styles? For links, paragraph styles, and the usual normalization
//   - ~Example of custom headers (make them in the page itself)~
//   - ~Example of columns and other layouts (wasn't actually the problem)~
//   - ~Example of defining helper methods outside of the Component~

export default App

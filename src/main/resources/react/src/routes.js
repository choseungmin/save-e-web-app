import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SuperMarketContainer from './app/superMarket/SuperMarketContainer'

const Routes = () => {
  return (
    <Switch>
      <Route path="/market" component={SuperMarketContainer} />
    </Switch>
  )

};

export default Routes

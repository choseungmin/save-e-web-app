import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from "./app/login/container/LoginContainer";
import SuperMarketContainer from './app/superMarket/SuperMarketContainer'

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginContainer} />
      <Route path="/" component={SuperMarketContainer} />
    </Switch>
  )

};

export default Routes

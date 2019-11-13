/*!

=========================================================
* Material Dashboard PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "api/axiosInterceptor";
import AuthLayout from "layouts/Auth.js";
import AnalysisLayout from "layouts/Analysis.js";

import { AnalysisProvider } from "contexts/analysisModule.js";
import { DashboardProvider } from "contexts/dashboardModule.js";
import { SchoolDataProvider } from "contexts/schoolDataModule";

import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

import "./style.css";

const hist = createBrowserHistory();

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }),
  children
);

ReactDOM.render(
  <AppProvider contexts={[AnalysisProvider, DashboardProvider, SchoolDataProvider]} >
    <Router history={hist}>
      <Switch>
        <Route path="/auth" component={AuthLayout} />
        <Route path="/analysis" component={AnalysisLayout} test={"test"}/>
        <Redirect from="/" to="/analysis/dashboard" />
      </Switch>
    </Router>
  </AppProvider>,
  document.getElementById("root")
);

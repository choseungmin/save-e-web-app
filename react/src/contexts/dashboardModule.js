import React, { Component, createContext } from 'react';
import createUseConsumer from './lib/createUseConsumer';
import {
  selectDashboardHeaderSummary,
  selectDashboardServiceRanking,
} from '../api/dashboardApi';

const Context = createContext();

const {
  Provider,
  Consumer: DashboardConsumer
} = Context;

class DashboardProvider extends Component {
  state = {
    headerSummaryInfo: [],
    serviceRanking: [],
  };
  actions = {
    selectDashboardHeaderSummary: async (selectedSchoolList, selectedDate) => {
      await selectDashboardHeaderSummary(selectedSchoolList, selectedDate).then((result) => {
        if(result &&result.length>0 && result[0]['end_month']===selectedDate) {
          this.setState(() => ({headerSummaryInfo: [...result]}));
        } else {
          this.setState(() => ({headerSummaryInfo: []}));
        }
      });
    },
    selectDashboardServiceRanking: async (selectedSchoolList, selectedDate) => {
      await selectDashboardServiceRanking(selectedSchoolList, selectedDate).then((result) => {
        if(result && result.length>0) {
          this.setState(() => ({serviceRanking: [...result]}));
        } else {
          this.setState(() => ({serviceRanking: []}));
        }
      });
    },

  };
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

const useDashboard = createUseConsumer(DashboardConsumer);

export {
  DashboardProvider,
  DashboardConsumer,
  useDashboard,
};

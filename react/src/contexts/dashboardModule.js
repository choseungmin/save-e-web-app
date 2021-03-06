import React, { Component, createContext } from 'react';
import createUseConsumer from './lib/createUseConsumer';
import {
  selectDashboardHeaderSummary,
  selectDashboardHeaderSummaryTotal,
  selectDashboardServiceRanking,
  selectDashboardChart
} from '../api/dashboardApi';

import {
  selectAnalysisTargetList,
} from '../api/analysisApi';

const Context = createContext();

const {
  Provider,
  Consumer: DashboardConsumer
} = Context;

class DashboardProvider extends Component {
  state = {
    headerSummaryInfo: [],
    headerSummaryTotalInfo: [],
    serviceRanking: [],
    dashboardChart: null,
    analysisTargetList: [],
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
    selectDashboardHeaderSummaryTotal: async (selectedSchoolList, selectedDate) => {
      await selectDashboardHeaderSummaryTotal(selectedSchoolList, selectedDate).then((result) => {
        if(result &&result.length>0) {
          this.setState(() => ({headerSummaryTotalInfo: [...result]}));
        } else {
          this.setState(() => ({headerSummaryTotalInfo: []}));
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
    selectDashboardChart: async (selectedSchoolList, selectedDate) => {
      await selectDashboardChart(selectedSchoolList, selectedDate).then((result) => {
        if(result ) {
          this.setState(() => ({dashboardChart: result}));
        } else {
          this.setState(() => ({serviceRanking: null}));
        }
      });
    },
    selectAnalysisTargetList: async (selectedSchoolList) => {
      await selectAnalysisTargetList(selectedSchoolList).then((result) => {
        if(result) {
          this.setState(() =>({analysisTargetList: result}));
        } else {
          this.setState(() =>({analysisTargetList: []}));
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

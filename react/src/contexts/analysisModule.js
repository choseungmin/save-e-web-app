import React, { Component, createContext } from 'react';
import createUseConsumer from './lib/createUseConsumer';
import {
  getLoginUserInfo,
  selectAnalysisTargetList,
  getAnalysisSchoolList,
  getAnalysisDateList
} from '../api/analysisApi';

const Context = createContext();

const {
  Provider,
  Consumer: AnalysisConsumer
} = Context;

class AnalysisProvider extends Component {
  state = {
    analysisSchoolList: [{value: 'all', name: '전체'}],
    analysisDateList: [{value: '-', name: '-'}],
    selectedSchoolList: [ '1', '2', '3' ],
    selectedDate: '-'
  };
  actions = {
    setAnalysisSchoolList: (param) => {
      this.setState(
        () => ({analysisSchoolList: [ ...param ]})
      )
    },
    getLoginUserInfo: async () => {
      const response = await getLoginUserInfo();
      return response;
    },
    selectAnalysisTargetList: async (selectedSchoolList) => {
      const response =await selectAnalysisTargetList(selectedSchoolList);
      return response
    },
    getAnalysisSchoolList: async(param) => {
      const response = await getAnalysisSchoolList(param);
      return response;
    },
    setAnalysisDateList: (param) => {
      this.setState( () => ({analysisDateList: [...param]}) )
    },
    getAnalysisDateList: async(param) => {
      const response = await getAnalysisDateList(param);
      return response;
    },
    setSelectedSchoolList: (param) => {
      this.setState( () => ({selectedSchoolList: [...param]}) )
    },
    setSelectedDate: (param) => {
      this.setState( () => ({selectedDate: param}) )
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

const useAnalysis = createUseConsumer(AnalysisConsumer);

export {
  AnalysisProvider,
  AnalysisConsumer,
  useAnalysis,
};
